import React from "react";
import type { PostMeta } from "../lib/posts";

export const meta: PostMeta = {
  slug: "commit-ai",
  title: "How I Built CommitAI Using Ollama — A Local LLM CLI in 48 Hours",
  date: "2025-05-10",
  tags: ["Ollama", "Python", "CLI", "Local LLM"],
  excerpt:
    "Bad commit messages were costing me time and embarrassment. So I built a CLI that writes them — entirely offline, using a local LLM via Ollama. Here's how.",
  readTime: 5,
  symbol: "▲",
};

export default function CommitAIPost() {
  return (
    <div className="blog-prose">
      <p>
        Every developer has a graveyard of commits named <code>fix</code>,{" "}
        <code>update</code>, or the legendary <code>asdfgh</code>. I had
        hundreds of them.
      </p>

      <p>
        It was embarrassing to look at my own git history. So instead of fixing
        my habits, I automated the problem away. That's engineering.
      </p>

      <h2>The Problem</h2>
      <p>
        Writing a good commit message requires a context switch — you have to
        stop thinking about code and start narrating it. After a 3-hour deep
        session, that's real cognitive tax. The result: lazy messages that mean
        nothing two weeks later.
      </p>
      <p>
        I wanted something that ran entirely offline, from the terminal, with
        zero external API calls. No subscriptions. No code leaving my machine.
      </p>

      <h2>Enter Ollama</h2>
      <p>
        Ollama lets you run open-source LLMs locally — Llama 3, Mistral, Gemma,
        and more. It exposes a clean REST API at <code>localhost:11434</code>.
        The model runs on your hardware. Your diff never leaves your machine.
      </p>
      <p>
        The plan: pipe <code>git diff --staged</code> into a prompt, get a
        well-formatted conventional commit message back, confirm, and commit.
      </p>

      <h2>The Core Build</h2>
      <p>CommitAI is a Python CLI. The core logic is under 60 lines:</p>

      <div className="code-block">
        <div className="code-header">
          <span className="text-squid-red font-orbitron text-xs tracking-widest">
            commit_ai.py — core
          </span>
        </div>
        <pre>{`import subprocess, requests, sys

def get_staged_diff():
    result = subprocess.run(
        ["git", "diff", "--staged"],
        capture_output=True, text=True
    )
    return result.stdout

def generate_message(diff: str) -> str:
    prompt = f"""Write a concise git commit message for this diff.
Follow conventional commits (feat/fix/chore/refactor/docs).
One line only. Max 72 chars. No quotes, no markdown.

DIFF:
{diff}

COMMIT MESSAGE:"""

    r = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": "mistral", "prompt": prompt, "stream": False},
    )
    return r.json()["response"].strip().strip('"')

if __name__ == "__main__":
    diff = get_staged_diff()
    if not diff:
        print("No staged changes."); sys.exit(1)

    msg = generate_message(diff)
    print(f"\\nGenerated: {msg}\\n")

    if input("Commit? [Y/n]: ").strip().lower() != "n":
        subprocess.run(["git", "commit", "-m", msg])`}</pre>
      </div>

      <p>
        The real work was prompt engineering. Too vague and the model writes
        generic garbage. Too prescriptive and it ignores the diff entirely. The
        sweet spot: explicit format rules + hard length constraint + tell it to
        read the diff carefully before responding.
      </p>

      <h2>What I Learned</h2>
      <p>
        <strong>Model size matters at the small end.</strong> Llama 3.2 (3B)
        was too small — it hallucinated file names that weren't in the diff.
        Mistral 7B hit the right balance of quality and speed on my 8 GB RAM
        machine.
      </p>
      <p>
        <strong>Cold-start UX matters.</strong> Local LLMs take 3–4 seconds on
        first load. Without a spinner, it felt broken. Adding one line of
        feedback completely changed how the tool felt — same latency, 10×
        better perceived quality.
      </p>

      <h2>The dev.to Challenge</h2>
      <p>
        I submitted CommitAI for the <strong>Gemma 4 Challenge on dev.to</strong>.
        It earned a completion badge and a few hundred organic views in the first
        week. More importantly, it became a tool I actually use every single day —
        which is the real test of a side project.
      </p>

      <div className="blog-callout">
        <span className="text-squid-red font-orbitron text-xs tracking-widest">
          ▲ FIELD NOTE
        </span>
        <p>
          The best side projects solve your own frustrations first. The audience
          finds tools they can believe in — because the builder clearly uses them
          themselves.
        </p>
      </div>
    </div>
  );
}
