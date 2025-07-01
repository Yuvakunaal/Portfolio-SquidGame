
import React, { useState } from 'react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      category: "PROGRAMMING ARSENAL",
      items: [
        { name: "Python", level: 95, description: "5★ HackerRank certified, DSA master" },
        { name: "Java", level: 80, description: "Object-oriented programming expertise" },
        { name: "SQL", level: 98, description: "Database query supremacy" },
        { name: "JavaScript", level: 85, description: "Full-stack web development" }
      ]
    },
    {
      category: "FULL-STACK WEAPONS",
      items: [
        { name: "MERN Stack", level: 90, description: "MongoDB, Express, React, Node.js" },
        { name: "Flask", level: 85, description: "Python web framework & REST APIs" },
        { name: "HTML/CSS", level: 88, description: "Responsive UI/UX design" },
        { name: "Bootstrap", level: 75, description: "Frontend framework mastery" }
      ]
    },
    {
      category: "DATA SCIENCE TOOLKIT",
      items: [
        { name: "Pandas", level: 90, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 85, description: "Numerical computing power" },
        { name: "Matplotlib", level: 80, description: "Data visualization expert" },
        { name: "Excel", level: 85, description: "Advanced data analysis tool" }
      ]
    },
    {
      category: "DEVELOPMENT TOOLS",
      items: [
        { name: "Git/GitHub", level: 85, description: "Version control mastery" },
        { name: "VS Code", level: 90, description: "IDE optimization expert" },
        { name: "Microsoft Office", level: 80, description: "Professional productivity suite" },
        { name: "Streamlit", level: 75, description: "Python web app deployment" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-squid-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            TECHNICAL ARSENAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Each skill is a weapon forged through countless battles with code
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl font-orbitron font-bold text-squid-red mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-tile cursor-hover"
                    onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-rajdhani font-bold text-squid-cyan mb-4">
                        {skill.name}
                      </h4>
                      
                      {/* Skill Level Indicator */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <div 
                            className="bg-gradient-to-r from-squid-red to-squid-pink h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-orbitron font-bold text-squid-white">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Expandable Description */}
                      <div className={`transition-all duration-300 overflow-hidden ${
                        selectedSkill === skill.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm font-rajdhani text-gray-300 mt-2">
                          {skill.description}
                        </p>
                      </div>

                      {/* Power Level Visual */}
                      <div className="mt-4 flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.level / 20) 
                                ? 'bg-squid-red animate-neon-pulse' 
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Abilities Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-orbitron font-bold text-squid-cyan mb-8">
            COMPETITIVE ACHIEVEMENTS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                HACKERRANK MASTER
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Python 5★ | Problem Solving 3★
              </p>
            </div>
            
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                LEETCODE WARRIOR
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                200+ Problems Solved (Top 10%)
              </p>
            </div>
            
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                CODECHEF CHAMPION
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                3★ Rated Coder (College Highest)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
