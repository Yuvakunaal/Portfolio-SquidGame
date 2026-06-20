import React from "react";
import type { PostMeta } from "../lib/posts";

export const meta: PostMeta = {
  slug: "vibe-coding",
  title: "Vibe Coding Is Real — And It Changed How I Ship",
  date: "2025-06-01",
  tags: ["Claude Code", "Lovable", "AI Dev Tools", "Builder Mindset"],
  excerpt:
    "Everyone's debating whether vibe coding is 'real engineering.' Meanwhile I shipped two full SaaS products in the time it used to take me to scaffold one. Here's what actually changed.",
  readTime: 4,
  symbol: "●",
};

export default function VibeCodingPost() {
  return (
    <div className="blog-prose">
      <p>
        The debate online goes: <em>"Vibe coding isn't real engineering."</em>{" "}
        Technically, that's true. Vibe coding is something different — and
        that's exactly why it matters.
      </p>

      <h2>What Vibe Coding Actually Is</h2>
      <p>
        Vibe coding is building at the speed of thought. You describe what you
        want, an AI generates a starting point, you iterate by describing
        what's wrong. The loop is: <strong>intent → generation → visual check → refinement</strong>.
      </p>
      <p>
        The skill that transfers isn't typing speed or memorizing APIs. It's{" "}
        <strong>knowing what good looks like</strong>. You still need to
        understand architecture, spot bugs, evaluate tradeoffs. You just stop
        spending 90% of your time on the mechanical parts.
      </p>

      <h2>Tools I Actually Use</h2>
      <p>
        <strong>Claude Code</strong> handles complex, multi-file tasks where I
        need real reasoning about code structure. It can refactor across an
        entire codebase, write tests, debug subtle issues. It's not
        autocomplete — it's a collaborator that holds full context and reasons
        about consequences.
      </p>
      <p>
        <strong>Lovable</strong> is where UI comes to life fast. Describe a
        component, iterate on the design, deploy. It understands design intent,
        not just syntax. I used it to bootstrap the UI layer of this portfolio
        and SQLumina's dashboard.
      </p>
      <p>
        <strong>Codex</strong> works well for one-shot utility scripts and API
        integrations where the task is well-defined and contained.
      </p>

      <h2>What Actually Changed</h2>
      <p>
        <strong>Before:</strong> I'd spend an entire weekend scaffolding a
        project — setting up the stack, writing boilerplate, wiring state,
        fighting CSS. The first commit with anything real in it was 48 hours
        away.
      </p>
      <p>
        <strong>Now:</strong> I have something demoable in 4 hours. The first
        weekend goes to product decisions, not infrastructure.
      </p>
      <p>
        That 10× acceleration compounds. More experiments shipped means more
        signal about what users actually want. The limiting factor becomes
        judgment, not velocity.
      </p>

      <h2>The Part Nobody Talks About</h2>
      <p>
        Vibe coding produces technical debt faster than traditional coding. If
        you can't read the code the AI wrote, you can't maintain it. The best
        vibe coders I know are also the ones who understand the output deeply
        enough to audit and own it.
      </p>
      <p>
        This isn't "AI replaces engineers." It's "engineers who use AI
        outcompete engineers who don't." The floor for quality went up. The
        barrier to ship went down.
      </p>

      <div className="blog-callout">
        <span className="text-squid-red font-orbitron text-xs tracking-widest">
          ● FIELD NOTE
        </span>
        <p>
          Don't vibe code everything. Use it where it shines: scaffolding, UI,
          boilerplate, repetitive patterns. Hand-write the parts where
          correctness is non-negotiable — auth, payment logic, data migrations.
          The judgment of where to draw that line is the skill.
        </p>
      </div>
    </div>
  );
}
