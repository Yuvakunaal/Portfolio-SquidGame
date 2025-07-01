
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
                BOGGAVARAPU YUVA SATYA KUNAAL
              </h3>
              <p className="text-squid-cyan font-rajdhani">
                AI & Data Science Student | Full-Stack Developer
              </p>
              <p className="text-sm text-gray-400 font-rajdhani mt-2">
                Hyderabad, Telangana | +91 8897160549
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">CGPA:</span>
                <span className="text-squid-cyan">9.01/10</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">SPECIALTY:</span>
                <span className="text-squid-cyan">DATA ANALYSIS & FULL-STACK</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">LEVEL:</span>
                <span className="text-squid-cyan">FINAL YEAR</span>
              </div>
              <div className="flex justify-between border-b border-squid-red pb-2">
                <span className="font-rajdhani font-semibold">OBJECTIVE:</span>
                <span className="text-squid-cyan">CONQUER DATA & CODE</span>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE DATA WARRIOR
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                From CBIT's AI & Data Science program, I've emerged as a skilled combatant 
                in both data analysis and full-stack development. My journey through 10,000+ 
                hotel booking records and 500+ user platforms has forged me into a versatile developer.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE TECHNICAL ARSENAL
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                Armed with Python mastery (5★ HackerRank), MERN stack expertise, and SQL supremacy, 
                I've conquered challenges from ByteXl internships to competitive programming arenas. 
                My weapons include data visualization and scalable backend architectures.
              </p>
            </div>

            <div className="glass p-6 rounded-lg hover:glass-red transition-all duration-300 cursor-hover">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-4">
                THE MISSION
              </h4>
              <p className="font-rajdhani text-gray-300 leading-relaxed">
                Ready to dominate the data analysis and full-stack development battlegrounds. 
                My goal: transform raw data into actionable insights and build scalable solutions 
                that serve hundreds of users while leading teams to victory.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">200+</div>
              <div className="font-rajdhani text-sm text-gray-400">LEETCODE PROBLEMS</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">9.01</div>
              <div className="font-rajdhani text-sm text-gray-400">CGPA EXCELLENCE</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">5★</div>
              <div className="font-rajdhani text-sm text-gray-400">PYTHON RATING</div>
            </div>
            <div className="text-center glass p-6 rounded-lg cursor-hover">
              <div className="text-3xl font-orbitron font-black text-squid-red mb-2">500+</div>
              <div className="font-rajdhani text-sm text-gray-400">USERS SERVED</div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-orbitron font-bold text-squid-cyan mb-8 text-center">
            TRAINING GROUND
          </h3>
          <div className="glass-red p-8 rounded-lg max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-2">
                CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY
              </h4>
              <p className="font-rajdhani text-squid-cyan mb-2">
                Bachelor of Engineering - Artificial Intelligence and Data Science
              </p>
              <p className="font-rajdhani text-gray-300 text-sm mb-4">
                Nov 2022 – Present | Hyderabad, Telangana
              </p>
              <div className="inline-block bg-squid-red/20 px-4 py-2 rounded-full border border-squid-red">
                <span className="font-orbitron font-bold text-squid-red">CGPA: 9.01/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
