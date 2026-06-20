import React, { useEffect, useState } from "react";
import profilePic from "./ui/profile-removebg.png";
import { useInView } from "../hooks/useInView";

/* ── Count-up hook — eased cubic ── */
function useCountUp(target: number, inView: boolean, duration = 1400, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    let rafId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(parseFloat((target * eased).toFixed(decimals)));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration, decimals]);

  return count;
}

/* ── Individual animated stat cell ── */
interface StatProps {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  inView: boolean;
  delay?: number;
}

const AnimatedStat: React.FC<StatProps> = ({
  target, suffix, decimals = 0, label, inView, delay = 0,
}) => {
  const count = useCountUp(target, inView, 1400, decimals);
  return (
    <div
      className={`text-center glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover fade-in-section ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: inView ? `${delay}s` : "0s" }}
    >
      <div className="text-3xl font-orbitron font-black text-squid-red mb-2">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </div>
      <div className="font-rajdhani text-xs text-gray-400 tracking-wider">{label}</div>
    </div>
  );
};

/* ── Education timeline — mirrors ExperienceTimeline from ProjectsSection ── */
const EducationTimeline = () => {
  const { ref, inView } = useInView(0.1);

  const focusAreas = [
    { symbol: "▲", label: "AI & DATA SCIENCE",    text: "Multi-agent systems · LLMs · RAG pipelines · Agentic AI" },
    { symbol: "●", label: "DATA ENGINEERING",      text: "Pandas · NumPy · analytics · ETL pipelines · SQL" },
    { symbol: "■", label: "SOFTWARE ENGINEERING",  text: "Full-stack dev · SaaS architecture · FastAPI · React" },
  ];

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
    >
      <div className="flex gap-0 md:gap-8 max-w-3xl mx-auto">

        {/* Left rail — desktop only */}
        <div className="hidden md:flex flex-col items-center">
          <div className="text-xs font-orbitron text-squid-red/60 whitespace-nowrap mb-3 mt-1">
            NOV 2022
          </div>
          <div className="timeline-node" />
          <div className="timeline-rail flex-1 my-1" />
          {/* Pulsing dot = still active */}
          <div className="timeline-node timeline-node-filled relative">
            <span className="absolute inset-0 rounded-full bg-squid-red animate-ping opacity-40" />
          </div>
          <div className="text-xs font-orbitron text-squid-red/60 whitespace-nowrap mt-3">
            PRESENT
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 glass-red p-8 rounded-lg">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-1">
                CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY
              </h4>
              <p className="font-rajdhani text-squid-cyan text-sm font-semibold tracking-wide">
                BACHELOR OF ENGINEERING — AI & DATA SCIENCE
              </p>
              <p className="font-rajdhani text-gray-400 text-xs mt-1">
                Nov 2022 – 2026 · Hyderabad, Telangana
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-squid-cyan/30 bg-squid-cyan/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-squid-cyan animate-pulse" />
              <span className="text-xs font-orbitron text-squid-cyan font-bold tracking-wider">
                ACTIVE
              </span>
            </div>
          </div>

          {/* CGPA badge */}
          <div className="mb-6">
            <div className="inline-block bg-squid-red/20 px-5 py-2.5 rounded-full border border-squid-red">
              <span className="font-orbitron font-bold text-squid-red text-lg">
                CGPA: 9.16 / 10
              </span>
            </div>
          </div>

          {/* Focus area grid — same pattern as ExperienceTimeline achievement cards */}
          <div className="grid md:grid-cols-3 gap-4 text-sm font-rajdhani text-gray-300">
            {focusAreas.map(a => (
              <div key={a.label} className="bg-squid-black/30 p-4 rounded border border-squid-red/10">
                <div className="text-squid-red font-orbitron font-bold text-xs mb-2 flex items-center gap-1.5">
                  <span className="text-squid-pink">{a.symbol}</span>
                  {a.label}
                </div>
                <p className="leading-relaxed text-xs">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Cert bullets — ▲●■ cycle ── */
const certs = [
  { symbol: "▲", text: "HackerRank Software Engineer Intern Certification" },
  { symbol: "●", text: "AI Foundation Certification (Hexart / NASSCOM)" },
  { symbol: "■", text: "IBM SkillsBuild Data Science Internship" },
  { symbol: "▲", text: "Python Foundation Certification (Infosys)" },
  { symbol: "●", text: "IIT Hyderabad Gen AI Workshop" },
  { symbol: "■", text: "CBIT GenAI, AgenticAI & Prompt Engineering Workshop (3 days)" },
  { symbol: "▲", text: "AI Associate Certification (Salesforce)" },
  { symbol: "●", text: "dev.to Gemma 4 Challenge — Completion Badge Earned" },
];

const storyCards = [
  {
    title: "THE SAAS FOUNDER",
    body: (
      <>
        Founder of <span className="text-squid-cyan font-semibold">SQLumina</span> — a
        large-scale SQL learning SaaS. Also shipped{" "}
        <span className="text-squid-cyan font-semibold">Habit Ink</span> (live habit
        tracker) and{" "}
        <span className="text-squid-cyan font-semibold">AI Flowchart Studio</span>{" "}
        (production AI diagram generator). I don't prototype and move on — I design,
        build, ship, and own end-to-end products.
      </>
    ),
  },
  {
    title: "THE GENAI INNOVATOR",
    body: (
      <>
        Multi-agent AI orchestration, schema-aware prompt engineering, RAG systems, and
        local LLM deployment with Ollama. Built 4-stage AI pipelines, NL→SQL engines, and
        AI Git assistants — delivering 200–600ms response times across Claude, Gemini,
        Mistral, Gemma 4, and more.
      </>
    ),
  },
  {
    title: "THE DATA & AUTOMATION ENGINEER",
    body: (
      <>
        Intelligent ETL pipelines with 99%+ accuracy, UiPath bots processing 100+
        emails/day with 70% efficiency gains, adaptive Selenium across 12+ ERP variants,
        and Make.com workflows that handle 100+ records in a single run — saving 8+
        manual hours weekly.
      </>
    ),
  },
];

const AboutSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: leftRef, inView: leftInView }       = useInView();
  const { ref: rightRef, inView: rightInView }     = useInView();
  const { ref: statsRef, inView: statsInView }     = useInView();
  const { ref: eduRef, inView: eduInView }         = useInView();
  const { ref: certsRef, inView: certsInView }     = useInView();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 fade-in-section ${headingInView ? "is-visible" : ""}`}
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            PLAYER PROFILE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Player Card */}
          <div
            ref={leftRef}
            className={`glass-red p-8 rounded-lg fade-in-section ${leftInView ? "is-visible" : ""}`}
          >
            <div className="text-center mb-8">
              {/* Double-ring photo */}
              <div className="relative w-44 h-44 mx-auto mb-6 cursor-hover">
                <div className="absolute inset-0 rounded-full border border-squid-red/30 animate-neon-pulse" />
                <div className="absolute inset-2 rounded-full border border-squid-red/60" />
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-[0_0_24px_rgba(255,0,64,0.5)]">
                  <img
                    src={profilePic}
                    alt="Yuva Kunaal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-extrabold text-squid-cyan mb-1">
                BOGGAVARAPU YUVA SATYA KUNAAL
              </h3>
              <p className="text-squid-red font-rajdhani font-semibold">
                AI Engineer · Founder of SQLumina
              </p>
              <p className="text-sm text-gray-400 font-rajdhani mt-1">
                Hyderabad, Telangana · +91 8897160549
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "CGPA",     value: "9.16 / 10" },
                { label: "SPECIALTY", value: "GenAI · SaaS · Data Engineering" },
                { label: "STATUS",   value: "CBIT Graduate · Founder" },
                { label: "VENTURE",  value: "SQLumina — Deployed · Pre-Launch" },
              ].map(row => (
                <div
                  key={row.label}
                  className="flex justify-between border-b border-squid-red/40 pb-3"
                >
                  <span className="font-rajdhani font-semibold text-sm">{row.label}:</span>
                  <span className="text-squid-cyan font-rajdhani text-sm text-right max-w-[60%]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Story cards — staggered */}
          <div ref={rightRef} className="space-y-5">
            {storyCards.map((card, i) => (
              <div
                key={card.title}
                className={`glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover fade-in-section ${rightInView ? "is-visible" : ""}`}
                style={{ transitionDelay: rightInView ? `${i * 0.14}s` : "0s" }}
              >
                <h4 className="text-base font-orbitron font-bold text-squid-red mb-3">
                  {card.title}
                </h4>
                <p className="font-rajdhani text-gray-300 leading-relaxed text-sm">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated stats */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <AnimatedStat target={4}    suffix="+" label="LIVE SAAS PRODUCTS"  inView={statsInView} delay={0}    />
          <AnimatedStat target={9.16} suffix=""  decimals={2} label="CGPA EXCELLENCE" inView={statsInView} delay={0.1} />
          <AnimatedStat target={200}  suffix="+" label="LEETCODE PROBLEMS"   inView={statsInView} delay={0.2} />
          <AnimatedStat target={10}   suffix="+" label="PROJECTS SHIPPED"    inView={statsInView} delay={0.3} />
        </div>

        {/* Education — vertical timeline */}
        <div
          ref={eduRef}
          className={`mt-16 fade-in-section ${eduInView ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-squid-red/30" />
            <h3 className="text-sm font-orbitron font-bold text-squid-cyan tracking-widest">
              ■ TRAINING GROUND
            </h3>
            <div className="h-px flex-1 bg-squid-red/30" />
          </div>
          <EducationTimeline />
        </div>

        {/* Certifications */}
        <div ref={certsRef} className="mt-14">
          <h3
            className={`text-3xl font-orbitron font-bold text-squid-cyan mb-8 text-center fade-in-section ${certsInView ? "is-visible" : ""}`}
          >
            CERTIFICATIONS & BADGES
          </h3>
          <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {certs.map((c, i) => (
              <div
                key={i}
                className={`glass p-4 rounded-lg flex items-center gap-3 hover:glass-red transition-all duration-300 cursor-hover fade-in-section ${certsInView ? "is-visible" : ""}`}
                style={{ transitionDelay: certsInView ? `${i * 0.07}s` : "0s" }}
              >
                <span className="text-squid-red font-bold text-sm shrink-0">{c.symbol}</span>
                <span className="font-rajdhani text-sm text-gray-300">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
