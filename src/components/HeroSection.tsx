import React, { useState, useEffect, useRef } from "react";
import shapeImage from "./ui/shapess.jpeg";

const ROLES = [
  "AI Engineer",
  "Founder of SQLumina",
  "GenAI Builder",
  "Vibe Coder",
  "Full-Stack AI Builder",
];

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const wordsRef = useRef(words);

  useEffect(() => {
    const word = wordsRef.current[wordIdx];
    let delay: number;
    if (deleting) {
      delay = charIdx === 0 ? 420 : 35;
    } else if (charIdx === word.length) {
      delay = 1800;
    } else {
      delay = 85;
    }

    const t = setTimeout(() => {
      if (deleting) {
        if (charIdx > 0) {
          setDisplay(word.slice(0, charIdx - 1));
          setCharIdx(n => n - 1);
        } else {
          setDeleting(false);
          setWordIdx(n => (n + 1) % wordsRef.current.length);
        }
      } else {
        if (charIdx < word.length) {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx(n => n + 1);
        } else {
          setDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx]);

  return display;
}

interface MagBtnProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagBtnProps> = ({ onClick, className, children }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.22;
    const dy = (e.clientY - r.top - r.height / 2) * 0.22;
    btn.style.transition = "transform 0.1s ease-out";
    btn.style.transform = `translate(${dx}px, ${dy}px) translateY(-2px)`;
  };

  const onLeave = () => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transition = "transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275)";
    btn.style.transform = "";
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${className} cursor-hover`}
    >
      {children}
    </button>
  );
};

const HeroSection = () => {
  const roleText = useTypewriter(ROLES);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Surveillance grid — very subtle, evokes CCTV compound */}
      <div
        className="absolute inset-0 surveillance-grid pointer-events-none"
        style={{ opacity: 0.55 }}
        aria-hidden="true"
      />

      {/* Radial neon atmosphere — light source above */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,0,64,0.18) 0%, rgba(255,105,180,0.06) 50%, transparent 70%)",
        }}
      />

      {/* Secondary cyan glow bottom-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 10% 90%, rgba(0,255,255,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Background Guards */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-guard-float">
          <GuardSVG />
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-guard-float"
          style={{ animationDelay: "1s" }}
        >
          <GuardSVG />
        </div>
        <div
          className="absolute bottom-1/4 left-1/2 animate-guard-float"
          style={{ animationDelay: "2s" }}
        >
          <GuardSVG />
        </div>
      </div>

      <div className="text-center z-10 px-6 max-w-3xl mx-auto">

        {/* Avatar */}
        <div className="mb-6 mt-2 animate-fade-in">
          <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-squid-pink to-squid-red animate-neon-pulse flex items-center justify-center">
            <img
              src={shapeImage}
              alt="Player 457"
              className="rounded-full w-28 h-28 object-cover"
            />
          </div>

          {/* Open to Opportunities badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/40 bg-green-500/[0.08] text-green-400 text-xs font-rajdhani font-semibold tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        {/* PLAYER 457 — glitch title */}
        <h1
          className="text-6xl md:text-8xl font-orbitron font-black mb-3 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="neon-text glitch-text" data-text="PLAYER 457">
            PLAYER 457
          </span>
        </h1>

        {/* Full name */}
        <p
          className="text-sm md:text-base font-rajdhani font-semibold text-gray-400 tracking-[0.3em] mb-4 animate-fade-in uppercase"
          style={{ animationDelay: "0.5s" }}
        >
          Boggavarapu Yuva Satya Kunaal
        </p>

        {/* Role line — typewriter */}
        <div
          className="text-xl md:text-2xl font-rajdhani font-light mb-8 text-squid-cyan animate-fade-in"
          style={{ animationDelay: "0.7s", minHeight: "2rem" }}
        >
          <span>{roleText}</span>
          <span className="typewriter-cursor" aria-hidden="true" />
        </div>

        {/* Bio */}
        <div
          className="max-w-xl mx-auto mb-5 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-sm font-rajdhani text-gray-400 leading-relaxed">
            B.E. AI & Data Science graduate · CBIT{" "}
            <span className="text-squid-cyan font-semibold">9.16 CGPA</span>. I design,
            build, ship, and own end-to-end systems — from multi-agent AI pipelines to
            fully deployed SaaS products with real users.
          </p>
        </div>

        {/* Tagline */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-xs font-rajdhani text-squid-red/70 tracking-[0.3em] uppercase">
            From engineer → to founder &nbsp;·&nbsp; From builder → to shipper
          </p>
        </div>

        {/* CTAs — magnetic drift */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          <MagneticButton
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-game"
          >
            VIEW SHIPPED PRODUCTS
          </MagneticButton>
          <MagneticButton
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-game"
          >
            RECRUIT ME
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "1.8s" }}>
          <p className="text-xs text-gray-600 font-rajdhani tracking-[0.25em] mb-3">
            SCROLL TO EXPLORE
          </p>
          <div className="w-5 h-9 mx-auto border border-squid-red/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2.5 bg-squid-red/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GuardSVG = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="guard-svg">
    <circle cx="50" cy="35" r="20" fill="#ff69b4" stroke="#ff0040" strokeWidth="2" />
    <rect x="40" y="55" width="20" height="30" fill="#ff69b4" stroke="#ff0040" strokeWidth="2" />
    <circle cx="45" cy="30" r="3" fill="#000" />
    <circle cx="55" cy="30" r="3" fill="#000" />
    <path d="M 40 40 Q 50 45 60 40" stroke="#000" strokeWidth="2" fill="none" />
  </svg>
);

export default HeroSection;
