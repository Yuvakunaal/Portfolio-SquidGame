import React from "react";
import shapeImage from "./ui/shapess.jpeg";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Guards Animation */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="text-center z-10 px-6">
        <div className="mb-8 mt-2 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-squid-pink to-squid-red animate-neon-pulse flex items-center justify-center cursor-hover">
            <img
              src={shapeImage}
              alt="shapes"
              className="rounded-full w-24 h-24"
            />
          </div>
        </div>

        <h1
          className="text-6xl md:text-8xl font-orbitron font-black mb-6 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="neon-text">WELCOME</span>
        </h1>

        <h2
          className="text-2xl md:text-4xl font-rajdhani font-light mb-8 text-squid-cyan animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          TO THE{" "}
          <span className="neon-text-red font-bold">DATA & CODE ARENA</span>
        </h2>

        <div
          className="max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <p className="text-lg font-rajdhani text-gray-300 leading-relaxed">
            I am{" "}
            <span className="text-squid-red font-semibold">Yuva Kunaal</span>, a
            final-year AI & Data Science student from CBIT with a 9.01 CGPA.
            Armed with Python mastery, MERN stack expertise, and data analysis
            skills, I'm ready to conquer the ultimate challenges in{" "}
            <span className="text-squid-cyan font-semibold">
              Data Analysis and Full-Stack Development
            </span>
            .
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-game cursor-hover"
          >
            VIEW BATTLE VICTORIES
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-game cursor-hover"
          >
            RECRUIT FOR DATA ROLES
          </button>
        </div>

        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="text-sm text-gray-500 font-rajdhani">
            Scroll down to explore my technical arsenal
          </div>
          <div className="w-6 h-10 mx-auto mt-4 border-2 border-squid-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-squid-red rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GuardSVG = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="guard-svg">
    <circle
      cx="50"
      cy="35"
      r="20"
      fill="#ff69b4"
      stroke="#ff0040"
      strokeWidth="2"
    />
    <rect
      x="40"
      y="55"
      width="20"
      height="30"
      fill="#ff69b4"
      stroke="#ff0040"
      strokeWidth="2"
    />
    <circle cx="45" cy="30" r="3" fill="#000" />
    <circle cx="55" cy="30" r="3" fill="#000" />
    <path d="M 40 40 Q 50 45 60 40" stroke="#000" strokeWidth="2" fill="none" />
  </svg>
);

export default HeroSection;
