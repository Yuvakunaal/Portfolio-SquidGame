
import React, { useState } from 'react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      category: "FRONTEND WEAPONS",
      items: [
        { name: "React", level: 90, description: "Component-based survival strategy" },
        { name: "TypeScript", level: 85, description: "Type-safe code construction" },
        { name: "Next.js", level: 80, description: "Full-stack framework mastery" },
        { name: "Tailwind CSS", level: 95, description: "Rapid UI development" }
      ]
    },
    {
      category: "BACKEND ARSENAL",
      items: [
        { name: "Node.js", level: 85, description: "Server-side domination" },
        { name: "Python", level: 80, description: "Versatile problem solving" },
        { name: "Express.js", level: 85, description: "API construction expertise" },
        { name: "MongoDB", level: 75, description: "NoSQL data management" }
      ]
    },
    {
      category: "TACTICAL TOOLS",
      items: [
        { name: "Git", level: 90, description: "Version control mastery" },
        { name: "Docker", level: 70, description: "Containerization skills" },
        { name: "AWS", level: 65, description: "Cloud deployment tactics" },
        { name: "Linux", level: 80, description: "System administration" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-squid-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            PLAYER ABILITIES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Each skill is a weapon in the developer games
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
            SPECIAL ABILITIES
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                PROBLEM SOLVING
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Analytical thinking under pressure
              </p>
            </div>
            
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                RAPID LEARNING
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Quick adaptation to new technologies
              </p>
            </div>
            
            <div className="glass-red p-6 rounded-lg cursor-hover">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-rajdhani font-bold text-squid-red mb-2">
                EXECUTION
              </h4>
              <p className="text-sm font-rajdhani text-gray-300">
                Delivering results on time, every time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
