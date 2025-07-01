
import React from 'react';

const AboutSection = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            PLAYER PROFILE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Player Card */}
          <div className="glass-red p-8 rounded-lg">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-squid-pink to-squid-red flex items-center justify-center cursor-hover">
                <span className="text-4xl font-orbitron font-black text-squid-black">456</span>
              </div>
              <h3 className="text-2xl font-orbitron font-bold neon-text-cyan mb-2">
                PLAYER STATUS: ACTIVE
              </h3>
              <p className="text-squid-cyan font-rajdhani">
                B.Tech Student | Full-Stack Developer
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">GAME MODE:</span>
                <span className="text-squid-cyan">SURVIVAL</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">SPECIALTY:</span>
                <span className="text-squid-cyan">FULL-STACK</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">LEVEL:</span>
                <span className="text-squid-cyan">FINAL YEAR</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">OBJECTIVE:</span>
                <span className="text-squid-cyan">WIN THE GAME</span>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE RECRUITMENT
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                Like many others, I started as an ordinary computer science student. 
                But when the invitation came to join the ultimate developer games, 
                I knew this was my chance to prove my worth in the digital arena.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE TRAINING
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                Every coding challenge I've faced has been preparation for this moment. 
                From debugging nightmares to deployment disasters, each obstacle has 
                made me stronger, more resilient, and ready for any technical challenge.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE MISSION
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                Now, as I stand at the threshold of my career, I'm ready to compete 
                at the highest level. My goal isn't just to survive the interview process—
                it's to dominate it and claim my rightful place in the tech industry.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">25+</div>
              <div className="font-rajdhani text-sm text-gray-400">PROJECTS COMPLETED</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">10+</div>
              <div className="font-rajdhani text-sm text-gray-400">TECHNOLOGIES MASTERED</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">100%</div>
              <div className="font-rajdhani text-sm text-gray-400">SURVIVAL RATE</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">∞</div>
              <div className="font-rajdhani text-sm text-gray-400">DETERMINATION LEVEL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
