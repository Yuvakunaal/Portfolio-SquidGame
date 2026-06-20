import React, { useState, useRef } from "react";
import { useInView } from "../hooks/useInView";

interface Project {
  id: number;
  title: string;
  challenge: string;
  status: string;
  difficulty: string;
  technologies: string[];
  description: string;
  features: string[];
  metrics: string;
  github: string;
  live: string;
  liveLabel?: string;
  liveDisabled?: boolean;
  privateRepo?: boolean;
}

const featuredProjects: Project[] = [
  {
    id: 11,
    title: "SQLumina",
    challenge: "The definitive large-scale SQL learning SaaS platform",
    status: "DEPLOYED · PRE-LAUNCH",
    difficulty: "NIGHTMARE",
    technologies: ["React", "TypeScript", "Supabase", "Clerk", "Neon", "Vercel", "Tailwind CSS"],
    description:
      "A large-scale SQL learning SaaS — schema-aware lessons, practice environments, progressive challenges, and intelligent guidance wrapped in production-grade SaaS architecture. End-to-end ownership from DB schema to deployment.",
    features: [
      "Schema-aware structured lesson system",
      "Interactive SQL practice environments",
      "Progressive challenge progression",
      "Full auth & billing integration",
      "Production SaaS architecture",
      "End-to-end deployed on Vercel",
    ],
    metrics: "Deployed · Pre-Launch · Full SaaS from idea to production",
    github: "https://github.com/Yuvakunaal",
    live: "https://github.com/Yuvakunaal",
    liveLabel: "PRE-LAUNCH",
    liveDisabled: true,
    privateRepo: true,
  },
  {
    id: 12,
    title: "AI Flowchart Studio",
    challenge: "Plain English → structured diagrams via a 4-stage multi-agent pipeline",
    status: "LIVE",
    difficulty: "EXTREME",
    technologies: ["FastAPI", "Python", "Gemini AI", "Mermaid.js", "Vanilla JS", "SSE", "Vercel", "Fly.io"],
    description:
      "Production-ready AI diagram generator powered by a 4-stage Multi-Agent Orchestration pipeline: Orchestrator → Logic Parser → Generator → Syntax Validator. Real-time SSE streaming, 50-step undo/redo, BYOK privacy architecture.",
    features: [
      "4-stage Multi-Agent Orchestration pipeline",
      "BYOK privacy architecture — zero server retention",
      "SSE real-time streaming pipeline status",
      "50-step undo/redo engine",
      "Export PNG (3x super-scaled), SVG, Mermaid",
      "Multi-project management (5 concurrent)",
    ],
    metrics: "Live · Mobile-first · Zero server data retention",
    github: "https://github.com/Yuvakunaal/AI-Flowchart-Studio",
    live: "https://ai-flowchart-studio.vercel.app",
  },
  {
    id: 13,
    title: "Habit Ink",
    challenge: "Minimal, intentional habit tracking SaaS — clarity over clutter",
    status: "LIVE",
    difficulty: "HARD",
    technologies: ["React", "TypeScript", "Supabase", "Vercel", "Tailwind CSS"],
    description:
      "A minimal habit tracking SaaS built for people who want clarity over clutter. No noise, no gamification gimmicks — just a clean daily rhythm that actually sticks. Live and growing.",
    features: [
      "Intentional minimal UI design",
      "Daily habit tracking rhythm",
      "Clean data ownership model",
      "Full SaaS architecture",
      "Live and growing user base",
    ],
    metrics: "Live at habitink.vercel.app — real users, real daily use",
    github: "https://github.com/Yuvakunaal/Habit-ink",
    live: "https://habitink.vercel.app/",
  },
  {
    id: 14,
    title: "CommitAI",
    challenge: "Eliminate writing commit messages — local AI Git assistant",
    status: "BADGE EARNED",
    difficulty: "EXTREME",
    technologies: ["Python 3.13+", "Ollama", "Gemma 4", "Rich", "Git hooks", "Conventional Commits"],
    description:
      "Local-first AI Git assistant. Reads staged diffs → generates Conventional Commit messages via Ollama + Gemma 4 → writes CHANGELOG.md → completes git workflow. All on-device, zero cloud, zero API keys.",
    features: [
      "AI-generated Conventional Commit messages",
      "Automatic CHANGELOG.md generation",
      "PR description generation (--pr flag)",
      "prepare-commit-msg git hook integration",
      "Multi-model support via --model flag",
      "Offline-first · Runs on 8GB RAM",
    ],
    metrics: "dev.to Gemma 4 Challenge — Completion Badge Earned",
    github: "https://github.com/Yuvakunaal/CommitAI",
    live: "https://github.com/Yuvakunaal/CommitAI",
    liveLabel: "CLI TOOL",
    liveDisabled: true,
  },
];

const archiveProjects: Project[] = [
  {
    id: 1,
    title: "Query Forge AI",
    challenge: "Production-ready NL-to-SQL engine with instant execution",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Python", "FastAPI", "MySQL", "Ollama (Mistral)", "GenAI", "Prompt Engineering"],
    description: "AI-powered NL→SQL engine with intelligent date handling, schema-aware validation, and instant execution UI. Delivers end-to-end query roundtrips in 200–600ms on local Ollama setups.",
    features: ["NL to SQL Conversion", "Schema Inspector", "Modular LLM Prompts", "Auto Table Discovery", "Production FastAPI Service"],
    metrics: "200-600ms end-to-end · high usability",
    github: "https://github.com/Yuvakunaal/QueryForgeAI",
    live: "https://github.com/Yuvakunaal/QueryForgeAI",
  },
  {
    id: 2,
    title: "AnalyzeQuestion — AI Coding Pattern Detector",
    challenge: "AI analyzer to deconstruct coding problems for efficient study",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Python", "FastAPI", "Ollama (Mistral)", "RAG", "SQLite", "Prompt Engineering"],
    description: "Detects algorithmic patterns (DP, graphs, greedy), classifies difficulty, and generates step-by-step approach in strict JSON for interview prep.",
    features: ["Pattern Detection (DP/Graphs/Greedy)", "Difficulty Classification", "RAG for Similar Problems", "Structured JSON Output"],
    metrics: "40-60% improved study-to-solve time",
    github: "https://github.com/Yuvakunaal/AnalyzeQuestion",
    live: "https://github.com/Yuvakunaal/AnalyzeQuestion",
  },
  {
    id: 3,
    title: "Anonyma — Anonymous Communication System",
    challenge: "Secure real-time anonymous platform with anti-abuse measures",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Flask", "WebSockets", "Javascript", "REST APIs", "AI (LLM)"],
    description: "Secure real-time chat with public/private chatrooms, IP-based usage limits, AI-powered code detection, and automatic room deletion after 24h.",
    features: ["Public & Private Chatrooms", "IP-Based Limits (5 rooms/day)", "AI Code Detection", "Auto Room Deletion (24h)"],
    metrics: "35% reduced server load · strict anti-abuse",
    github: "https://github.com/Yuvakunaal/Anonyma",
    live: "https://github.com/Yuvakunaal/Anonyma",
  },
  {
    id: 4,
    title: "ERP Academic Intelligence Engine",
    challenge: "Automate academic record extraction from legacy ERP",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Python", "GenAI", "EasyOCR", "Pandas", "Selenium", "ETL Pipelines", "Gradio"],
    description: "Intelligent ETL pipeline to extract and structure academic data from ERP screenshots into SGPA/CGPA records with high accuracy.",
    features: ["ETL + EasyOCR + LLM", "Adaptive Selenium for 12+ ERP variants", "Academic Analytics", "Gradio Interface"],
    metrics: "99%+ accuracy · 8h/week saved · 65% less verification time",
    github: "https://github.com/Yuvakunaal/ERP-Grade-Automation",
    live: "https://github.com/Yuvakunaal/ERP-Grade-Automation",
  },
  {
    id: 5,
    title: "ChatWithPDF",
    challenge: "AI-powered PDF Q&A system with OCR capabilities",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Python", "FastAPI", "Ollama", "PyMuPDF", "Tesseract OCR", "JavaScript"],
    description: "Upload PDFs and ask natural language questions about content, with support for both text-based and scanned PDFs through OCR.",
    features: ["Text Extraction", "OCR for Scanned PDFs", "NL Query Processing", "Responsive Interface"],
    metrics: "Accurate extraction with OCR fallback",
    github: "https://github.com/Yuvakunaal/ChatWithPDF-AI",
    live: "https://github.com/Yuvakunaal/ChatWithPDF-AI",
  },
  {
    id: 6,
    title: "Hotel Booking Analytics",
    challenge: "Extract actionable insights from 10,000+ hotel bookings",
    status: "COMPLETED",
    difficulty: "HARD",
    technologies: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn"],
    description: "Comprehensive analysis of hotel bookings to identify demand trends, cancellation patterns, and customer behavior.",
    features: ["Demand & Seasonality Analysis", "Cancellation Patterns", "Customer Segmentation", "BI Visualisation"],
    metrics: "Identified peak seasons (40% revenue) · 15% occupancy improvement",
    github: "https://github.com/Yuvakunaal/Hotel-Booking-Analysis",
    live: "https://github.com/Yuvakunaal/Hotel-Booking-Analysis",
  },
  {
    id: 7,
    title: "AI Voice Desktop Assistant",
    challenge: "Fast, on-device voice agent for cross-platform desktop control",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Python", "GenAI", "SpeechRecognition", "AppleScript", "Fuzzy Logic", "LLM (Mistral)"],
    description: "Privacy-focused on-device voice agent that indexes local files/apps and executes commands using fuzzy logic and LLM ranking.",
    features: ["Zero Cloud Storage", "Fuzzy Logic + LLM Ranking", "Cross-Platform", "Google CSE + DuckDuckGo"],
    metrics: "<1s launch · 98% first-match accuracy",
    github: "https://github.com/Yuvakunaal/AI-Voice-Desktop-Assistant",
    live: "https://github.com/Yuvakunaal/AI-Voice-Desktop-Assistant",
  },
  {
    id: 8,
    title: "1-Click Certificate Generator",
    challenge: "Automate certificate generation from Google Sheets with dynamic PDF creation",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Make.com", "Google Sheets API", "Google Drive API", "CraftMyPDF"],
    description: "Automated system that transforms Google Sheets data into personalized PDF certificates using dynamic placeholders.",
    features: ["Dynamic Data Mapping", "Custom Template Support", "Auto PDF Generation", "Google Drive Integration"],
    metrics: "100+ certificates in minutes · 100% data accuracy",
    github: "https://github.com/Yuvakunaal/1-Click-Certificates-Generator",
    live: "https://github.com/Yuvakunaal/1-Click-Certificates-Generator",
  },
  {
    id: 9,
    title: "1-Click Attendance Notifier",
    challenge: "1-click system to monitor attendance and send bulk warning emails",
    status: "COMPLETED",
    difficulty: "EXTREME",
    technologies: ["Make.com", "Google Sheets API", "SMTP Email API", "Conditional Logic"],
    description: "Evaluates every student in a Google Sheet, identifies at-risk students (<75% attendance), and triggers personalized bulk emails in one click.",
    features: ["1-Click Bulk Processing", "On-Demand & Scheduled Execution", "Dynamic Threshold Checking", "Personalized Emails"],
    metrics: "100+ students processed in a single run · zero missed",
    github: "https://github.com/Yuvakunaal/1-Click-Attendance-Notifier",
    live: "https://github.com/Yuvakunaal/1-Click-Attendance-Notifier",
  },
];

const getDifficultyColor = (d: string) => {
  if (d === "NIGHTMARE") return "text-squid-red";
  if (d === "EXTREME")   return "text-orange-400";
  if (d === "HARD")      return "text-yellow-400";
  return "text-gray-400";
};

const getStatusColor = (s: string) => {
  if (s === "LIVE")                               return "text-green-400";
  if (s.includes("DEPLOYED") || s.includes("PRE")) return "text-yellow-400";
  if (s.includes("BADGE"))                        return "text-squid-pink";
  return "text-squid-cyan";
};

/* ── Featured card with 3D tilt + gleam sweep ── */
const FeaturedCard = ({ project, delay = 0 }: { project: Project; delay?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { ref: inViewRef, inView } = useInView(0.1);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: dy * -5, y: dx * 5 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={inViewRef}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: inView ? `${delay}s` : "0s" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition:
            tilt.x === 0 && tilt.y === 0
              ? "transform 0.5s ease-out, box-shadow 0.3s"
              : "transform 0.08s ease-out, box-shadow 0.3s",
          transformStyle: "preserve-3d",
        }}
        className="gleam-card glass rounded-lg border border-squid-red/30 hover:border-squid-red/60 hover:shadow-[0_20px_50px_rgba(255,0,64,0.2)] group h-full"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-orbitron font-bold text-squid-red group-hover:neon-text transition-all">
              {project.title}
            </h3>
            <div className="text-right shrink-0 ml-4">
              <div className={`text-sm font-rajdhani font-bold ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
              <div className={`text-xs font-rajdhani ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </div>
            </div>
          </div>

          <p className="font-rajdhani text-squid-cyan text-sm mb-4">{project.challenge}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-squid-red/20 text-squid-red text-xs font-rajdhani font-semibold rounded-full border border-squid-red/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="font-rajdhani text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-xs font-rajdhani text-gray-400">
                <span className="text-squid-red mt-0.5 shrink-0">▸</span>
                {f}
              </div>
            ))}
          </div>

          {/* Impact */}
          <div className="bg-squid-red/10 border border-squid-red/20 px-3 py-2 rounded mb-5">
            <p className="text-xs font-rajdhani text-squid-cyan font-semibold">
              IMPACT: {project.metrics}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {!project.privateRepo && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-transparent border border-squid-red text-squid-red text-xs font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:bg-squid-red hover:text-squid-black cursor-hover"
              >
                VIEW CODE
              </a>
            )}
            {project.liveDisabled ? (
              <span className="flex-1 text-center py-2 bg-gray-800 text-gray-500 text-xs font-rajdhani font-bold uppercase tracking-wider border border-gray-700 cursor-not-allowed select-none">
                {project.liveLabel ?? "COMING SOON"}
              </span>
            ) : (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-squid-red text-squid-black text-xs font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:bg-squid-pink cursor-hover"
              >
                {project.liveLabel ?? "LIVE DEMO"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Archive card ── */
const ArchiveCard = ({ project, delay = 0 }: { project: Project; delay?: number }) => {
  const { ref, inView } = useInView(0.05);

  return (
    <div
      ref={ref}
      className={`glass rounded-lg border border-squid-red/15 hover:border-squid-red/40 p-5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,64,0.15)] group fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: inView ? `${delay}s` : "0s" }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base font-orbitron font-bold text-squid-red">{project.title}</h3>
        <span className={`text-xs font-rajdhani font-bold shrink-0 ml-3 ${getDifficultyColor(project.difficulty)}`}>
          {project.difficulty}
        </span>
      </div>
      <p className="font-rajdhani text-gray-400 text-xs mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.technologies.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-squid-red/10 text-squid-red text-xs font-rajdhani rounded-full border border-squid-red/20"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-0.5 text-gray-500 text-xs font-rajdhani">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-rajdhani text-squid-red hover:text-squid-pink transition-colors cursor-hover"
        >
          CODE ↗
        </a>
        {project.live !== project.github && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-rajdhani text-squid-cyan hover:text-white transition-colors cursor-hover"
          >
            LIVE ↗
          </a>
        )}
      </div>
    </div>
  );
};

/* ── Experience timeline ── */
const ExperienceTimeline = () => {
  const { ref, inView } = useInView(0.1);

  const achievements = [
    { symbol: "▲", label: "AUTOMATION",  text: "UiPath bots syncing 100+ emails/day to Google Sheets — 70% efficiency gain." },
    { symbol: "●", label: "SQL MASTERY", text: "Complex queries: multi-table JOINs, CTEs, window functions on structured datasets." },
    { symbol: "■", label: "FULLSTACK",   text: "Python DSA problem-solving + responsive HTML/CSS/JS interfaces for 100+ users." },
  ];

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
    >
      {/* Timeline layout: left rail + card */}
      <div className="flex gap-0 md:gap-8 max-w-3xl mx-auto">

        {/* Left rail — desktop only */}
        <div className="hidden md:flex flex-col items-center">
          <div className="text-xs font-orbitron text-squid-red/60 whitespace-nowrap mb-3 mt-1">
            JUN 2024
          </div>
          <div className="timeline-node" />
          <div className="timeline-rail flex-1 my-1" />
          <div className="timeline-node timeline-node-filled" />
          <div className="text-xs font-orbitron text-squid-red/60 whitespace-nowrap mt-3">
            JUL 2024
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 glass-red p-8 rounded-lg">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-1">
                BYTEXL
              </h4>
              <p className="font-rajdhani text-squid-cyan text-sm font-semibold tracking-wide">
                TECHNICAL SKILLING INTERNSHIP
              </p>
              <p className="font-rajdhani text-gray-400 text-xs mt-1">
                June 2024 – July 2024 · Hyderabad, Telangana
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs font-orbitron text-green-400 font-bold tracking-wider">
                COMPLETED
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm font-rajdhani text-gray-300">
            {achievements.map(a => (
              <div key={a.label} className="bg-squid-black/30 p-4 rounded border border-squid-red/10">
                <div className="text-squid-red font-orbitron font-bold text-xs mb-2 flex items-center gap-1.5">
                  <span className="text-squid-pink">{a.symbol}</span>
                  {a.label}
                </div>
                <p className="leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [showArchive, setShowArchive] = useState(false);
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: ctaRef, inView: ctaInView }         = useInView();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div
          ref={headingRef}
          className={`text-center mb-16 fade-in-section ${headingInView ? "is-visible" : ""}`}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            BATTLE VICTORIES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6" />
          <p className="text-xl font-rajdhani text-squid-cyan">
            Designed · Built · Shipped · Owned
          </p>
        </div>

        {/* Featured / Flagship */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-squid-red/30" />
            <h3 className="text-sm font-orbitron font-bold text-squid-red tracking-widest">
              ▲ FLAGSHIP PRODUCTS
            </h3>
            <div className="h-px flex-1 bg-squid-red/30" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((p, i) => (
              <FeaturedCard key={p.id} project={p} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* Archive toggle */}
        <div className="mt-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-squid-red/20" />
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="flex items-center gap-2 text-sm font-orbitron font-bold text-gray-400 hover:text-squid-red transition-colors cursor-hover tracking-widest"
            >
              {showArchive ? "▲" : "▼"} MORE BATTLES ({archiveProjects.length})
            </button>
            <div className="h-px flex-1 bg-squid-red/20" />
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-500 overflow-hidden ${
              showArchive ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {archiveProjects.map((p, i) => (
              <ArchiveCard key={p.id} project={p} delay={i * 0.04} />
            ))}
          </div>
        </div>

        {/* Experience — vertical timeline */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-squid-red/30" />
            <h3 className="text-sm font-orbitron font-bold text-squid-cyan tracking-widest">
              ● BATTLEFIELD EXPERIENCE
            </h3>
            <div className="h-px flex-1 bg-squid-red/30" />
          </div>
          <ExperienceTimeline />
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 fade-in-section ${ctaInView ? "is-visible" : ""}`}
        >
          <div className="glass-red p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold neon-text-cyan mb-4">
              READY FOR THE NEXT CHALLENGE?
            </h3>
            <p className="font-rajdhani text-gray-300 mb-6">
              I don't just prototype — I ship. Bring me your hardest AI, data, or product challenge.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-game cursor-hover"
            >
              RECRUIT PLAYER 457
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
