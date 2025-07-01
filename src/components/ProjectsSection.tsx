
import React, { useState } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-COMMERCE SURVIVAL",
      challenge: "Build a complete online marketplace",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "A full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Survived all edge cases and deployment challenges.",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Inventory"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "SOCIAL MEDIA ELIMINATION",
      challenge: "Create a viral social platform",
      status: "COMPLETED",
      difficulty: "HARD",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      description: "Real-time social media application with live chat, post sharing, and notification system. Only the most engaging features survived the user testing.",
      features: ["Real-time Chat", "Media Sharing", "Push Notifications", "User Profiles"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "AI CHATBOT BATTLE",
      challenge: "Develop an intelligent assistant",
      status: "IN PROGRESS",
      difficulty: "NIGHTMARE",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      description: "Advanced AI chatbot with natural language processing and machine learning capabilities. Currently surviving the training phase.",
      features: ["NLP Processing", "Context Memory", "API Integration", "Learning Algorithm"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "BLOCKCHAIN PROTOCOL",
      challenge: "Build a decentralized application",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      description: "Decentralized voting system built on blockchain technology. Survived gas optimization and smart contract auditing challenges.",
      features: ["Smart Contracts", "Wallet Integration", "Gas Optimization", "Security Audit"],
      github: "#",
      live: "#"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'text-green-400';
      case 'HARD': return 'text-yellow-400';
      case 'EXTREME': return 'text-orange-400';
      case 'NIGHTMARE': return 'text-squid-red';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED': return 'text-squid-cyan';
      case 'IN PROGRESS': return 'text-yellow-400';
      case 'ELIMINATED': return 'text-squid-red';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            GAME CHALLENGES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Each project is a deadly game - only the strongest code survives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card p-6 cursor-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-squid-red mb-2">
                    {project.title}
                  </h3>
                  <p className="font-rajdhani text-gray-300 text-sm">
                    {project.challenge}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-rajdhani font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                  <div className={`text-xs font-rajdhani ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-squid-red/20 text-squid-red text-xs font-rajdhani font-semibold rounded-full border border-squid-red/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Description */}
              <p className="font-rajdhani text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Expandable Details */}
              <div className={`transition-all duration-500 overflow-hidden ${
                selectedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-squid-red/30 pt-4 mt-4">
                  <h4 className="font-orbitron font-bold text-squid-cyan text-sm mb-3">
                    SURVIVAL FEATURES:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs font-rajdhani text-gray-300">
                        <div className="w-2 h-2 bg-squid-red rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2 bg-transparent border border-squid-red text-squid-red text-xs font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:bg-squid-red hover:text-squid-black cursor-hover"
                    >
                      VIEW CODE
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 text-center py-2 bg-squid-red text-squid-black text-xs font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 hover:bg-squid-pink cursor-hover"
                    >
                      LIVE DEMO
                    </a>
                  </div>
                </div>
              </div>

              {/* Click Indicator */}
              <div className="text-center mt-4">
                <div className="text-xs font-rajdhani text-gray-500">
                  Click to {selectedProject === project.id ? 'collapse' : 'expand'} details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-red p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold neon-text-cyan mb-4">
              READY FOR THE NEXT CHALLENGE?
            </h3>
            <p className="font-rajdhani text-gray-300 mb-6">
              These projects represent just the beginning. I'm ready to take on new challenges 
              and prove my worth in your development arena.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-game cursor-hover"
            >
              RECRUIT ME FOR YOUR TEAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
