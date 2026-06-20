import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import PageNav from "../components/PageNav";

const BUILDING = [
  {
    symbol: "▲",
    name: "SQLumina",
    desc: "AI-powered SQL SaaS — pre-launch. Building the query intelligence engine, multi-agent backend, and subscriber onboarding flow.",
  },
  {
    symbol: "●",
    name: "This Portfolio",
    desc: "Always evolving. Blog, command palette, depth on each project. The portfolio itself is a shipped product I actively maintain.",
  },
];

const LEARNING = [
  {
    symbol: "■",
    name: "Advanced Agentic Patterns",
    desc: "Memory systems, tool-use chains, long-horizon planning for AI agents. Going past the tutorials into production-grade patterns.",
  },
  {
    symbol: "▲",
    name: "AI Product Strategy",
    desc: "The mechanics of going from builder to founder — pricing, positioning, GTM for AI-first SaaS. Reading everything I can find.",
  },
];

const THINKING = [
  {
    symbol: "●",
    name: "The Moat After Commoditization",
    desc: "If AI can write code, what's the durable advantage? Probably: taste, judgment, domain knowledge, and shipping speed. Still thinking about this.",
  },
  {
    symbol: "■",
    name: "Building in Public",
    desc: "Whether to document the SQLumina journey openly. The tension between competitive advantage and audience-building. Haven't decided yet.",
  },
];

interface NowItem {
  symbol: string;
  name: string;
  desc: string;
}

const NowBlock = ({
  title,
  symbol,
  items,
  ci,
}: {
  title: string;
  symbol: string;
  items: NowItem[];
  ci: number;
}) => {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${ci * 0.12}s` }}
    >
      <h2 className="text-lg font-orbitron font-bold text-squid-red mb-5 flex items-center gap-3">
        <span className="text-squid-pink text-base">{symbol}</span>
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`glass p-5 rounded-lg border border-squid-red/15 hover:border-squid-red/35 hover:glass-red transition-all duration-300 cursor-hover fade-in-section ${inView ? "is-visible" : ""}`}
            style={{ transitionDelay: inView ? `${ci * 0.12 + i * 0.07}s` : "0s" }}
          >
            <div className="flex items-start gap-3">
              <span className="text-squid-red font-orbitron font-black text-sm shrink-0 mt-0.5">
                {item.symbol}
              </span>
              <div>
                <h3 className="font-orbitron font-bold text-squid-cyan text-xs mb-1.5 tracking-wide">
                  {item.name}
                </h3>
                <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Now = () => {
  const { ref: headerRef, inView: headerInView } = useInView();

  return (
    <div className="min-h-screen bg-squid-black text-squid-white">
      <PageNav currentPage="CURRENT STATUS" />

      <div className="pt-28 pb-24 px-6">
        <div className="container mx-auto max-w-2xl">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-14 fade-in-section ${headerInView ? "is-visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-squid-red/35 font-orbitron text-xs tracking-[0.25em]">
                PLAYER 457 — STATUS REPORT
              </span>
              <div className="h-px flex-1 bg-squid-red/10" />
            </div>

            <h1 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4 leading-none">
              NOW
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-squid-red to-squid-pink mb-5" />

            <p className="font-rajdhani text-gray-400 text-lg leading-relaxed mb-3">
              What I'm actually working on, learning, and thinking about — right
              now.
            </p>
            <span className="text-squid-red/50 text-xs font-orbitron tracking-[0.25em]">
              LAST UPDATED: 20 JUN 2026
            </span>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <NowBlock title="BUILDING" symbol="▲" items={BUILDING} ci={0} />
            <NowBlock title="LEARNING" symbol="●" items={LEARNING} ci={1} />
            <NowBlock title="THINKING ABOUT" symbol="■" items={THINKING} ci={2} />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-squid-red/10 flex items-center justify-between">
            <Link
              to="/"
              className="text-xs font-orbitron text-gray-600 hover:text-squid-red transition-colors cursor-hover tracking-widest"
            >
              ← BACK TO THE GAME
            </Link>
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-orbitron text-gray-700 hover:text-gray-500 transition-colors cursor-hover tracking-widest"
            >
              NOWNOWNOW.COM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
