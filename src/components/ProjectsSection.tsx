
import React, { useState } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "VIRTUAL EVENT PLATFORM",
      challenge: "Build a scalable event management system",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "MongoDB"],
      description: "Full-stack platform enabling 500+ users to create, manage, and participate in events. Implemented role-based functionality with intuitive navigation and scalable backend architecture.",
      features: ["Role-based Access Control", "Event Creation & Management", "User Registration System", "Scalable Backend Architecture"],
      metrics: "40% faster event management, 25% reduced server load",
      github: "https://github.com/Yuvakunaal",
      live: "#"
    },
    {
      id: 2,
      title: "YT-INSTA VIDEO DOWNLOADER",
      challenge: "Create multi-platform video downloading solution",
      status: "COMPLETED",
      difficulty: "HARD",
      technologies: ["Python", "Streamlit", "yt-dlp", "instaloader"],
      description: "User-friendly web application enabling seamless video downloads from YouTube and Instagram. Built with Python and Streamlit for optimal user experience.",
      features: ["Multi-platform Support", "Streamlit Web Interface", "Download Optimization", "User-friendly Design"],
      metrics: "50% faster downloads, 200+ active users, 15% retention increase",
      github: "https://github.com/Yuvakunaal",
      live: "#"
    },
    {
      id: 3,
      title: "HOTEL BOOKING ANALYSIS",
      challenge: "Extract insights from booking data patterns",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      description: "Comprehensive data analysis on 10,000+ hotel bookings, uncovering critical business insights including peak booking patterns and cancellation trends.",
      features: ["Statistical Analysis", "Data Visualization", "Trend Identification", "Business Intelligence"],
      metrics: "Analyzed 10,000+ records, identified key patterns for optimization",
      github: "https://github.com/Yuvakunaal",
      live: "#"
    },
    {
      id: 4,
      title: "BYTEXL INTERNSHIP PROJECTS",
      challenge: "Develop multiple Flask applications",
      status: "COMPLETED",
      difficulty: "HARD",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "Created 3+ web applications during technical skilling internship, improving deployment efficiency and serving 100+ users with responsive interfaces.",
      features: ["Flask Web Apps", "Responsive Design", "User Interface Optimization", "Deployment Automation"],
      metrics: "20% improved deployment efficiency, 100+ users served",
      github: "https://github.com/Yuvakunaal",
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
            BATTLE VICTORIES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Each project conquered through code, data, and determination
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

              {/* Metrics */}
              <div className="bg-squid-red/10 px-3 py-2 rounded mb-4">
                <p className="text-xs font-rajdhani text-squid-cyan font-semibold">
                  IMPACT: {project.metrics}
                </p>
              </div>

              {/* Expandable Details */}
              <div className={`transition-all duration-500 overflow-hidden ${
                selectedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-squid-red/30 pt-4 mt-4">
                  <h4 className="font-orbitron font-bold text-squid-cyan text-sm mb-3">
                    KEY FEATURES:
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
                      target="_blank"
                      rel="noopener noreferrer"
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

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-orbitron font-bold text-squid-cyan mb-8 text-center">
            BATTLEFIELD EXPERIENCE
          </h3>
          <div className="glass-red p-8 rounded-lg max-w-4xl mx-auto">
            <div className="mb-6">
              <h4 className="text-xl font-orbitron font-bold text-squid-red mb-2">
                BYTEXL - TECHNICAL SKILLING INTERNSHIP
              </h4>
              <p className="font-rajdhani text-squid-cyan mb-2">
                Intern | June 2024 – July 2024 | Hyderabad, Telangana
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-rajdhani text-gray-300">
              <div className="bg-squid-black/30 p-4 rounded">
                <span className="text-squid-red font-semibold">ACHIEVEMENT 1:</span><br/>
                Developed 3+ web applications using Flask, improving deployment efficiency by 20%
              </div>
              <div className="bg-squid-black/30 p-4 rounded">
                <span className="text-squid-red font-semibold">ACHIEVEMENT 2:</span><br/>
                Created responsive interfaces for 100+ users using HTML, CSS, JavaScript, Bootstrap
              </div>
              <div className="bg-squid-black/30 p-4 rounded">
                <span className="text-squid-red font-semibold">ACHIEVEMENT 3:</span><br/>
                Enhanced problem-solving skills by mastering Python Data Structures and Algorithms
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-red p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold neon-text-cyan mb-4">
              READY FOR THE NEXT CHALLENGE?
            </h3>
            <p className="font-rajdhani text-gray-300 mb-6">
              These victories represent my journey through data analysis and full-stack development. 
              I'm ready to bring my skills to your organization's most challenging projects.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-game cursor-hover"
            >
              RECRUIT FOR DATA & DEVELOPMENT ROLES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
