import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "SYSTEM BOOT SEQUENCE INITIATED", delay: 0 },
  { text: "LOADING PLAYER 457 DATA...", delay: 220 },
  { text: "CONNECTING TO GAME SERVER...", delay: 430 },
  { text: "VERIFYING PLAYER CREDENTIALS...", delay: 640 },
  { text: "▲  ●  ■   ACCESS GRANTED   ■  ●  ▲", delay: 890, ok: true },
];

const PROGRESS_STEPS   = [15,   35,   55,   72,   88,   100];
const PROGRESS_DELAYS  = [1100, 1300, 1500, 1700, 1900, 2150];

const LoadingScreen = () => {
  const [visibleLines, setVisibleLines] = useState<Set<number>>(new Set());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(prev => new Set([...prev, i])), line.delay)
      );
    });

    PROGRESS_STEPS.forEach((step, i) => {
      timers.push(
        setTimeout(() => setProgress(step), PROGRESS_DELAYS[i])
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const allLinesVisible = visibleLines.size === BOOT_LINES.length;

  return (
    <div className="fixed inset-0 bg-squid-black flex items-center justify-center z-50 overflow-hidden">
      {/* CRT scanlines */}
      <div className="scanlines" aria-hidden="true" />

      {/* Corner brackets — surveillance frame aesthetic */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-squid-red/40" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-squid-red/40" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-squid-red/40" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-squid-red/40" />

      {/* REC indicator */}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-squid-red animate-pulse" />
        <span className="font-orbitron text-xs text-squid-red/60 tracking-widest">REC</span>
      </div>

      <div className="text-center relative z-10 px-6">
        {/* 457 badge */}
        <div className="w-24 h-24 mx-auto mb-10 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-squid-pink to-squid-red animate-neon-pulse flex items-center justify-center">
            <div className="text-3xl font-orbitron font-black text-squid-black tracking-wider">
              457
            </div>
          </div>
        </div>

        {/* Terminal lines */}
        <div className="w-72 sm:w-80 mx-auto mb-8 text-left space-y-0">
          {BOOT_LINES.map((line, i) => (
            <div
              key={i}
              className={`terminal-line ${visibleLines.has(i) ? "visible" : ""}`}
            >
              <span className="text-squid-cyan/70">{"› "}</span>
              <span className={line.ok ? "text-green-400" : "text-squid-red/75"}>
                {line.text}
              </span>
              {line.ok && visibleLines.has(i) && (
                <span className="text-green-400 ml-2">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Title — fades in after lines are done */}
        <div
          className="mb-7 transition-all duration-500"
          style={{ opacity: allLinesVisible ? 1 : 0, transform: allLinesVisible ? "translateY(0)" : "translateY(8px)" }}
        >
          <h1 className="text-3xl md:text-5xl font-orbitron font-black neon-text tracking-wide">
            ENTERING THE GAME
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full h-1 bg-gray-800 overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-squid-red to-squid-pink transition-all duration-300 ease-out"
              style={{ width: `${progress}%`, boxShadow: "0 0 8px #ff0040" }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-orbitron text-squid-red/50 tracking-widest">
              PLAYER 457
            </span>
            <span className="text-xs font-orbitron text-squid-red tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
