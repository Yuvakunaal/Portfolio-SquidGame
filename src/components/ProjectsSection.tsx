import React, { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Query Forge AI",
      challenge:
        "Build a production-ready NL-to-SQL engine with instant execution",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Python",
        "FastAPI",
        "MySQL",
        "Ollama (Mistral)",
        "GenAI",
        "Prompt Engineering",
        "HTML",
        "CSS",
        "JS",
      ],
      description:
        "Built an AI-powered NL→SQL engine with intelligent date handling, schema-aware validation, and an instant execution UI. Delivers end-to-end query roundtrips in 200–600 ms on local Ollama setups.",
      features: [
        "Natural Language to SQL Conversion",
        "Schema Inspector & Data Preview",
        "Modular LLM Prompts for Safe SQL Generation",
        "Automatic Table/Schema Discovery",
        "Production-ready FastAPI Service with CORS & Error Handling",
      ],
      metrics:
        "End-to-end query execution in 200-600ms, high usability with low-friction onboarding",
      github: "https://github.com/Yuvakunaal/QueryForgeAI",
      live: "https://github.com/Yuvakunaal/QueryForgeAI",
    },
    {
      id: 2,
      title: "AnalyzeQuestion - AI Coding Pattern Detector",
      challenge:
        "Create an AI analyzer to deconstruct coding problems for efficient study",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Python",
        "FastAPI",
        "Ollama (Mistral)",
        "RAG",
        "SQLite",
        "Prompt Engineering",
      ],
      description:
        "An AI analyzer that detects algorithmic patterns (DP, graphs, greedy, etc.), classifies difficulty, and generates a step-by-step approach in strict JSON for interview prep and competitive programming.",
      features: [
        "Algorithmic Pattern Detection (DP, Graphs, Greedy, Search)",
        "Difficulty Classification",
        "Lightweight RAG for Similar Problem Retrieval",
        "Structured JSON Output with Schema-aware Prompting",
        "Responsive UI with History Tracking & Dark/Light Mode",
      ],
      metrics:
        "Improved study-to-solve time by 40-60%, higher pattern recall vs. no-RAG baseline",
      github: "https://github.com/Yuvakunaal/AnalyzeQuestion",
      live: "https://github.com/Yuvakunaal/AnalyzeQuestion",
    },
    {
      id: 3,
      title: "Anonyma – Anonymous Communication System",
      challenge:
        "Create a secure, real-time platform for anonymous communication with anti-abuse measures",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Flask",
        "WebSockets",
        "Javascript",
        "REST APIs",
        "Authentication & Security",
        "AI (LLM)",
      ],
      description:
        "Built a secure real-time communication platform with public/private chatrooms, strict IP-based usage limits to prevent misuse, and AI-powered features for developers.",
      features: [
        "Public & Password-Protected Chatrooms",
        "IP-Based Usage Limits (max 5 rooms/day/user)",
        "AI-Powered Code Detection & Summarization",
        "Automatic Deletion of Inactive Rooms (24h)",
      ],
      metrics:
        "Reduced server load by 35%, enforced strict anti-abuse policies",
      github: "https://github.com/Yuvakunaal/Anonyma",
      live: "https://github.com/Yuvakunaal/Anonyma",
    },
    {
      id: 4,
      title: "ERP Academic Intelligence Engine",
      challenge:
        "Automate the extraction and analysis of academic records from a legacy ERP",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Python",
        "GenAI",
        "LLM",
        "EasyOCR",
        "Pandas",
        "Selenium",
        "ETL Pipelines",
        "Gradio",
      ],
      description:
        "Built an intelligent ETL pipeline to extract and structure academic data from ERP screenshots into SGPA/CGPA records with high accuracy, eliminating manual data entry.",
      features: [
        "Intelligent ETL Pipeline with EasyOCR & LLM (Mistral-TB)",
        "Adaptive Selenium Automation for 12+ ERP variants",
        "Academic Performance Analytics & Visualization",
        "Gradio Interface for Easy Interaction",
      ],
      metrics:
        "99%+ data accuracy, saved 8+ manual hours weekly, reduced verification time by 65%",
      github: "https://github.com/Yuvakunaal/ERP-Grade-Automation",
      live: "https://github.com/Yuvakunaal/ERP-Grade-Automation",
    },
    {
      id: 5,
      title: "ChatwithPdf",
      challenge: "Build an AI-powered PDF query system with OCR capabilities",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Python",
        "FastAPI",
        "Ollama",
        "PyMuPDF",
        "Tesseract OCR",
        "JavaScript",
      ],
      description:
        "A web application that allows users to upload PDF documents and ask natural language questions about their content, with support for both text-based and scanned PDFs through OCR technology.",
      features: [
        "Text Extraction from PDFs",
        "OCR for Scanned Documents",
        "Natural Language Query Processing",
        "FastAPI Backend with CORS Support",
        "Responsive Web Interface",
      ],
      metrics:
        "Accurate text extraction with OCR fallback, efficient query processing",
      github: "https://github.com/Yuvakunaal/ChatWithPDF-AI",
      live: "https://github.com/Yuvakunaal/ChatWithPDF-AI",
    },
    {
      id: 6,
      title: "Hotel Booking Analytics",
      challenge:
        "Extract actionable insights from hotel booking data to optimize revenue",
      status: "COMPLETED",
      difficulty: "HARD",
      technologies: [
        "Python",
        "SQL",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Kaggle",
      ],
      description:
        "Conducted a comprehensive analysis of 10,000+ hotel bookings to identify key trends in demand, cancellation patterns, and customer behavior to drive strategic decisions.",
      features: [
        "Demand & Seasonality Analysis",
        "Cancellation Pattern Identification",
        "Customer Segmentation",
        "Data Visualization for Business Intelligence",
      ],
      metrics:
        "Identified peak seasons (40% of annual revenue), suggested strategies increasing occupancy by 15%",
      github: "https://github.com/Yuvakunaal/Hotel-Booking-Analysis",
      live: "https://github.com/Yuvakunaal/Hotel-Booking-Analysis",
    },
    {
      id: 7,
      title: "AI Voice Desktop Assistant",
      challenge:
        "Develop a fast, on-device voice agent for cross-platform desktop control",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Python",
        "GenAI",
        "SpeechRecognition",
        "AppleScript",
        "REST APIs",
        "Fuzzy Logic",
        "LLM (Mistral-TB)",
      ],
      description:
        "A privacy-focused, on-device voice agent that indexes local files/apps and executes commands using fuzzy logic and LLM ranking, replacing multi-step GUI workflows.",
      features: [
        "On-Device Processing (Zero Cloud Storage)",
        "Fuzzy Logic + LLM Ranking for Target Launch",
        "Cross-Platform Support (macOS/Windows/Linux)",
        "Google CSE & DuckDuckGo Integration for Queries",
      ],
      metrics:
        "Launches correct target in <1s, 98% first-match accuracy, replaces 3-step GUI workflows",
      github: "https://github.com/Yuvakunaal/AI-Voice-Desktop-Assistant",
      live: "https://github.com/Yuvakunaal/AI-Voice-Desktop-Assistant",
    },
    {
      id: 8,
      title: "YT-INSTA VIDEO DOWNLOADER",
      challenge: "Create a multi-platform video downloading solution",
      status: "COMPLETED",
      difficulty: "HARD",
      technologies: ["Python", "Streamlit", "yt-dlp", "instaloader"],
      description:
        "User-friendly web application enabling seamless video downloads from YouTube and Instagram. Built with Python and Streamlit for optimal user experience.",
      features: [
        "Multi-platform Support (YouTube & Instagram)",
        "Streamlit Web Interface",
        "Download Optimization",
        "User-friendly Design",
      ],
      metrics: "50% faster downloads, 200+ active users",
      github: "https://github.com/Yuvakunaal/YT-Insta-MP4-Download",
      live: "https://yt-insta-mp4.streamlit.app/",
    },
    {
      id: 9,
      title: "1-Click Certificate Generator",
      challenge:
        "Automate certificate generation from Google Sheets data with dynamic PDF creation",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Make.com",
        "Google Sheets API",
        "Google Drive API",
        "CraftMyPDF",
        "HTTP Requests",
        "Automation Workflows",
      ],
      description:
        "Built an automated certificate generation system that transforms Google Sheets data into personalized PDF certificates using dynamic placeholders, with automatic upload to Google Drive.",
      features: [
        "Dynamic Data Mapping from Google Sheets",
        "Custom Certificate Template Support",
        "Automatic PDF Generation with Placeholders",
        "Google Drive Integration for Storage",
        "Scalable Solution for Any Number of Recipients",
        "No-Code/Low-Code Implementation",
      ],
      metrics:
        "Generates 100+ certificates in minutes, eliminates manual work, 100% accuracy in data mapping",
      github: "https://github.com/Yuvakunaal/1-Click-Certificates-Generator",
      live: "https://github.com/Yuvakunaal/1-Click-Certificates-Generator",
    },
    {
      id: 10,
      title: "1-Click Attendance Notifier System",
      challenge:
        "Build an on-demand automated system to monitor student attendance and instantly send warning emails to all students falling below a threshold with a single click.",
      status: "COMPLETED",
      difficulty: "EXTREME",
      technologies: [
        "Make.com",
        "Google Sheets API",
        "SMTP Email API",
        "Conditional Logic",
        "Bulk Data Processing",
        "On-Demand Automation",
      ],
      description:
        "Engineered an automated monitoring system that evaluates every student in a Google Sheet, applies conditional logic to identify at-risk students (<75% attendance), and triggers personalized bulk email notifications instantly with a 1-click run.",
      features: [
        "1-Click Bulk Processing: Evaluates all rows and emails all at-risk students in seconds",
        "On-Demand & Scheduled Execution: Run manually anytime or set to run automatically",
        "Dynamic Threshold Checking (Configurable %, e.g., <75%)",
        "Personalized Email Content with Individual Attendance Data",
        "Guarantees no student below the threshold is missed",
      ],
      metrics:
        "Processes 100+ student records in a single run, sends personalized emails in seconds, eliminates manual tracking and notification tasks.",
      github: "https://github.com/Yuvakunaal/1-Click-Attendance-Notifier",
      live: "https://github.com/Yuvakunaal/1-Click-Attendance-Notifier",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "EASY":
        return "text-green-400";
      case "HARD":
        return "text-yellow-400";
      case "EXTREME":
        return "text-orange-400";
      case "NIGHTMARE":
        return "text-squid-red";
      default:
        return "text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-squid-cyan";
      case "IN PROGRESS":
        return "text-yellow-400";
      case "ELIMINATED":
        return "text-squid-red";
      default:
        return "text-gray-400";
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
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
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
                  <div
                    className={`text-sm font-rajdhani font-bold ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                  <div
                    className={`text-xs font-rajdhani ${getDifficultyColor(
                      project.difficulty
                    )}`}
                  >
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
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  selectedProject === project.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-squid-red/30 pt-4 mt-4">
                  <h4 className="font-orbitron font-bold text-squid-cyan text-sm mb-3">
                    KEY FEATURES:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs font-rajdhani text-gray-300"
                      >
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
                      target="_blank"
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
                  Click to{" "}
                  {selectedProject === project.id ? "collapse" : "expand"}{" "}
                  details
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
                <span className="text-squid-red font-semibold">
                  ACHIEVEMENT 1:
                </span>
                <br />
                Automated HR workflows with UiPath bots to sync 100+ emails/day
                to Google Sheets, achieving 70% efficiency gain.
              </div>
              <div className="bg-squid-black/30 p-4 rounded">
                <span className="text-squid-red font-semibold">
                  ACHIEVEMENT 2:
                </span>
                <br />
                Developed advanced SQL skills by writing complex queries using
                multi-table JOINs, CTEs, and window functions to analyze
                structured data.
              </div>
              <div className="bg-squid-black/30 p-4 rounded">
                <span className="text-squid-red font-semibold">
                  ACHIEVEMENT 3:
                </span>
                <br />
                Mastered Python DSA for problem-solving and built responsive
                front-end interfaces using HTML, CSS, JavaScript, and Bootstrap
                for 100+ users.
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
              These victories represent my journey through data analysis and
              full-stack development. I'm ready to bring my skills to your
              organization's most challenging projects.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-game cursor-hover"
            >
              RECRUIT FOR SKILLS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
