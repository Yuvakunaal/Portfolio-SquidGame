import React, { useState } from "react";
import githubIcon from "./github.png";
import linkedinIcon from "./linkedin.png";
import emailIcon from "./email.png";
import phoneIcon from "./phone-call.png";
import gpsIcon from "./gps.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = encodeURIComponent(
      `Recruitment Opportunity - ${formData.company || "Company"}`
    );
    const body = encodeURIComponent(`Hello Yuva Kunaal,

I am ${formData.name} from ${formData.company || "[Company Name]"}.

${formData.details}

Best regards,
${formData.name}`);

    // Open email client
    window.location.href = `mailto:bhavikunaal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-squid-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-orbitron font-black neon-text mb-4">
            RECRUITMENT PHASE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Ready to recruit Yuva Kunaal for Data Analysis, Data Engineering &
            AI, GenAI roles?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-red p-6 rounded-lg">
              <h3 className="text-2xl font-orbitron font-bold text-squid-red mb-6">
                PLAYER COORDINATES
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">
                      <img
                        style={{ width: "30px" }}
                        src={emailIcon}
                        alt="email"
                      />
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      Email
                    </div>
                    <div className="font-rajdhani text-gray-300">
                      bhavikunaal@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">
                      <img
                        style={{ width: "30px" }}
                        src={phoneIcon}
                        alt="phone"
                      />
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      Phone
                    </div>
                    <div className="font-rajdhani text-gray-300">
                      +91 8897160549
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">
                      <img
                        style={{ width: "30px" }}
                        src={linkedinIcon}
                        alt="linkedin"
                      />
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      LinkedIn
                    </div>
                    <a
                      href="https://www.linkedin.com/in/boggavarapu-yuva-satya-kunaal-127817290/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-rajdhani text-gray-300 hover:text-squid-cyan transition-colors"
                    >
                      /in/yuva-kunaal-127817290/
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">
                      <img
                        style={{ width: "30px" }}
                        src={githubIcon}
                        alt="github"
                      />
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      GitHub
                    </div>
                    <a
                      href="https://github.com/Yuvakunaal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-rajdhani text-gray-300 hover:text-squid-cyan transition-colors"
                    >
                      github.com/Yuvakunaal
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">
                      <img style={{ width: "30px" }} src={gpsIcon} alt="gps" />
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      Location
                    </div>
                    <div className="font-rajdhani text-gray-300">
                      Hyderabad, Telangana
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-orbitron font-bold text-squid-cyan mb-4">
                CERTIFICATIONS & ACHIEVEMENTS
              </h4>
              <ul className="space-y-2 font-rajdhani text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">🏆</span>
                  HackerRank Software Engineer Intern Certification
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">🤖</span>
                  AI Foundation Certification (Hexart/NASSCOM)
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">📊</span>
                  IBM SkillsBuild Data Science Internship
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">🐍</span>
                  Python Foundation Certification (Infosys)
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">🧠</span>
                  IIT Hyderabad Gen AI Workshop Participation
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">🧪</span>
                  CBIT GenAI, AgenticAI, Prompt Engineering, 3 days Workshop
                  participation
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">☁️</span>
                  AI Associate Certification (Salesforce)
                </li>
              </ul>
            </div>

            {/* Target Roles */}
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-orbitron font-bold text-squid-cyan mb-4">
                TARGET ROLES
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    DATA ANALYST
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    DATA ENGINEER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    GENAI ENGINEER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    AI ENGINEER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    AUTOMATION ENGINEER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    MAKE AUTOMATOR
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-red p-8 rounded-lg">
            <h3 className="text-2xl font-orbitron font-bold text-squid-red mb-6">
              SEND RECRUITMENT MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-rajdhani font-semibold text-squid-cyan mb-2">
                  RECRUITER NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block font-rajdhani font-semibold text-squid-cyan mb-2">
                  COMPANY / ORGANIZATION *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover"
                  placeholder="Your company name"
                  required
                />
              </div>

              <div>
                <label className="block font-rajdhani font-semibold text-squid-cyan mb-2">
                  JOB OPPORTUNITY DETAILS *
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover resize-none"
                  placeholder="Describe the role, requirements, and what makes this opportunity exciting..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-game py-4 cursor-hover"
              >
                RECRUIT YUVA KUNAAL
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-squid-red/30">
          <p className="font-rajdhani text-gray-400 text-sm">
            © 2025 Boggavarapu Yuva Satya Kunaal. All rights reserved.
          </p>
          <p className="font-rajdhani text-squid-red text-xs mt-2">
            "In the game of development, data drives decisions and code conquers
            challenges."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
