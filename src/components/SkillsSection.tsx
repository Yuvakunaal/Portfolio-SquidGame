import React from "react";
import { useInView } from "../hooks/useInView";

const TICKER_ITEMS = [
  { name: "Python",             symbol: "▲" },
  { name: "FastAPI",            symbol: "●" },
  { name: "React",              symbol: "■" },
  { name: "TypeScript",         symbol: "▲" },
  { name: "SQL",                symbol: "●" },
  { name: "Supabase",           symbol: "■" },
  { name: "Ollama",             symbol: "▲" },
  { name: "Gemini",             symbol: "●" },
  { name: "Claude",             symbol: "■" },
  { name: "Vercel",             symbol: "▲" },
  { name: "Fly.io",             symbol: "●" },
  { name: "Pandas",             symbol: "■" },
  { name: "Make.com",           symbol: "▲" },
  { name: "ChatGPT",            symbol: "●" },
  { name: "DeepSeek",           symbol: "■" },
  { name: "Lovable",            symbol: "▲" },
  { name: "Claude Code",        symbol: "●" },
  { name: "Codex",              symbol: "■" },
  { name: "Mermaid.js",         symbol: "▲" },
  { name: "Vite",               symbol: "●" },
  { name: "Git",                symbol: "■" },
  { name: "Selenium",           symbol: "▲" },
  { name: "Tailwind CSS",       symbol: "●" },
  { name: "Neon DB",            symbol: "■" },
  { name: "Kimi",               symbol: "▲" },
  { name: "Qwen",               symbol: "●" },
  { name: "Llama",              symbol: "■" },
  { name: "Prompt Engineering", symbol: "▲" },
];

type Rank = "RECRUIT" | "SOLDIER" | "VETERAN" | "ELITE" | "MASTER";

interface Skill {
  name: string;
  rank: Rank;
  proof: string;
}

interface Category {
  category: string;
  symbol: string;
  items: Skill[];
}

const RANK_ORDER: Rank[] = ["RECRUIT", "SOLDIER", "VETERAN", "ELITE", "MASTER"];

const RANK_COLOR: Record<Rank, string> = {
  RECRUIT: "text-gray-400",
  SOLDIER: "text-blue-400",
  VETERAN: "text-yellow-400",
  ELITE:   "text-orange-400",
  MASTER:  "text-squid-red",
};

const skills: Category[] = [
  {
    category: "PROGRAMMING ARSENAL",
    symbol: "▲",
    items: [
      { name: "Python",           rank: "MASTER", proof: "5★ HackerRank · Backend systems · AI pipelines" },
      { name: "SQL",              rank: "MASTER", proof: "CTEs · Window Functions · Query optimisation · SQLumina founder" },
      { name: "JavaScript (ES6+)", rank: "ELITE", proof: "Production SaaS UIs · SSE pipelines · Vanilla & React" },
      { name: "TypeScript",       rank: "ELITE", proof: "Full-stack SaaS products with Vite + React" },
    ],
  },
  {
    category: "AI & GENAI EXPERTISE",
    symbol: "●",
    items: [
      { name: "LLMs",                      rank: "MASTER", proof: "Claude · ChatGPT · Gemini · Mistral · DeepSeek · Kimi · Qwen · Llama · Gemma 4" },
      { name: "Multi-Agent Orchestration", rank: "ELITE",  proof: "4-stage pipeline in AI Flowchart Studio · Prod shipped" },
      { name: "Prompt Engineering",        rank: "MASTER", proof: "Schema-aware · deterministic · structured-output at prod scale" },
      { name: "RAG Systems",              rank: "ELITE",  proof: "AnalyzeQuestion · ChatWithPDF · hallucination-resistant pipelines" },
      { name: "Ollama / Local LLMs",       rank: "ELITE",  proof: "CommitAI · AI Voice Assistant · offline-first · 8GB RAM" },
      { name: "AI Dev Tools",             rank: "ELITE",  proof: "Lovable · Claude Code · Codex — vibe-coded full products end-to-end" },
    ],
  },
  {
    category: "SAAS & FULLSTACK",
    symbol: "■",
    items: [
      { name: "React + Vite",      rank: "ELITE",  proof: "SQLumina · Habit Ink · this portfolio" },
      { name: "FastAPI / Flask",   rank: "MASTER", proof: "AI Flowchart Studio · QueryForgeAI · ChatWithPDF" },
      { name: "Supabase / Neon",   rank: "VETERAN", proof: "Production auth · real-time db · SaaS backends" },
      { name: "Vercel + Fly.io",   rank: "ELITE",  proof: "Multiple prod deployments · CORS · ASGI workers · serverless" },
    ],
  },
  {
    category: "DATA & AUTOMATION",
    symbol: "▲",
    items: [
      { name: "Pandas / NumPy",   rank: "ELITE",   proof: "ETL pipelines · 10,000+ row analyses · OCR extraction" },
      { name: "ETL Pipelines",    rank: "ELITE",   proof: "ERP Intelligence Engine · 99%+ accuracy · 8h/week saved" },
      { name: "Make.com",         rank: "VETERAN", proof: "1-Click Certificate Gen · Attendance Notifier · HR workflows" },
      { name: "Selenium / UiPath", rank: "VETERAN", proof: "12+ ERP variants · 100+ emails/day · 70% efficiency gain" },
    ],
  },
  {
    category: "DATABASES",
    symbol: "●",
    items: [
      { name: "MySQL",                rank: "MASTER", proof: "QueryForgeAI · complex JOINs · stored procedures" },
      { name: "SQLite",               rank: "ELITE",  proof: "AnalyzeQuestion RAG store · lightweight prod dbs" },
      { name: "Firebase / Supabase",  rank: "VETERAN", proof: "Real-time backends · row-level security · auth" },
    ],
  },
];

/* ── Rank dots badge ── */
const RankBadge = ({ rank }: { rank: Rank }) => {
  const filled = RANK_ORDER.indexOf(rank) + 1;
  return (
    <div className="flex items-center gap-1.5">
      {RANK_ORDER.map((r, i) => (
        <div
          key={r}
          className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 ${
            i < filled ? "bg-squid-red shadow-[0_0_6px_#ff0040]" : "bg-gray-700"
          }`}
        />
      ))}
      <span className={`text-xs font-orbitron font-bold ml-1 ${RANK_COLOR[rank]}`}>
        {rank}
      </span>
    </div>
  );
};

/* ── Each category gets its own inView so they stagger individually ── */
const SkillCategory = ({ category, ci }: { category: Category; ci: number }) => {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${ci * 0.08}s` }}
    >
      <h3 className="text-xl font-orbitron font-bold text-squid-red mb-6 flex items-center gap-3">
        <span className="text-squid-pink">{category.symbol}</span>
        {category.category}
        <span className="text-squid-pink">{category.symbol}</span>
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {category.items.map((skill, si) => (
          <div
            key={si}
            className={`skill-tile cursor-hover group fade-in-section ${inView ? "is-visible" : ""}`}
            style={{ transitionDelay: inView ? `${ci * 0.08 + si * 0.05}s` : "0s" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-base font-rajdhani font-bold text-squid-cyan group-hover:text-squid-white transition-colors">
                {skill.name}
              </h4>
              <RankBadge rank={skill.rank} />
            </div>
            <p className="text-xs font-rajdhani text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {skill.proof}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: tickerRef, inView: tickerInView }   = useInView();
  const { ref: achRef, inView: achInView }         = useInView();

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-squid-black to-gray-900">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 fade-in-section ${headingInView ? "is-visible" : ""}`}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            TECHNICAL ARSENAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6" />
          <p className="text-xl font-rajdhani text-squid-cyan">
            Each skill proven through shipped products — not arbitrary percentages
          </p>
        </div>

        {/* Skill categories — each watches itself */}
        <div className="space-y-14">
          {skills.map((cat, ci) => (
            <SkillCategory key={ci} category={cat} ci={ci} />
          ))}
        </div>

        {/* Infinite Tech Stack Ticker */}
        <div
          ref={tickerRef}
          className={`mt-20 mb-16 fade-in-section ${tickerInView ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-squid-red/20" />
            <p className="text-xs font-orbitron text-gray-500 tracking-widest">FULL STACK</p>
            <div className="h-px flex-1 bg-squid-red/20" />
          </div>
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #0c0c0c, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(-90deg, #0c0c0c, transparent)" }}
            />
            <div className="ticker-track">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2 shrink-0">
                  <span className="text-squid-red/60 text-xs">{item.symbol}</span>
                  <span className="font-rajdhani font-semibold text-gray-400 text-sm whitespace-nowrap hover:text-squid-cyan transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Achievements */}
        <div
          ref={achRef}
          className={`mt-4 text-center fade-in-section ${achInView ? "is-visible" : ""}`}
        >
          <h3 className="text-3xl font-orbitron font-bold text-squid-cyan mb-8">
            COMPETITIVE ACHIEVEMENTS
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* HackerRank */}
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4 flex justify-center">
                <img
                  className="w-10 h-10"
                  src="/hackerrank.png"
                  alt="HackerRank"
                />
              </div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                HACKERRANK MASTER
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Python 5★ · Problem Solving 4★
              </p>
            </div>

            {/* LeetCode */}
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="mb-4 flex justify-center">
                <LeetcodeIcon />
              </div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                LEETCODE WARRIOR
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                200+ Problems Solved · Top 18% contest rating
              </p>
            </div>

            {/* dev.to */}
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="mb-4 flex justify-center items-center h-10">
                <span className="font-orbitron font-black text-squid-red text-2xl tracking-widest">
                  DEV
                </span>
              </div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                DEV.TO BADGE EARNED
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Gemma 4 Challenge · CommitAI · Completion Badge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeetcodeIcon = () => (
  <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="#B3B1B0"
      d="M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355z"
    />
    <path
      fill="#E7A41F"
      d="M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187z"
    />
  </svg>
);

export default SkillsSection;
