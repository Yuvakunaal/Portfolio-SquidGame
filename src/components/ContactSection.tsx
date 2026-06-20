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
            Ready to recruit Yuva Kunaal — GenAI Engineer, SaaS Founder &
            Full-Stack AI Builder?
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
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-lg font-orbitron font-black">
                      DEV
                    </span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">
                      dev.to
                    </div>
                    <a
                      href="https://dev.to/yuva_kunaal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-rajdhani text-gray-300 hover:text-squid-cyan transition-colors"
                    >
                      dev.to/yuva_kunaal
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
                {[
                  { sym: "▲", text: "HackerRank Software Engineer Intern Certification" },
                  { sym: "●", text: "AI Foundation Certification (Hexart / NASSCOM)" },
                  { sym: "■", text: "IBM SkillsBuild Data Science Internship" },
                  { sym: "▲", text: "Python Foundation Certification (Infosys)" },
                  { sym: "●", text: "IIT Hyderabad Gen AI Workshop Participation" },
                  { sym: "■", text: "CBIT GenAI, AgenticAI & Prompt Engineering Workshop (3 days)" },
                  { sym: "▲", text: "AI Associate Certification (Salesforce)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-squid-red font-bold text-xs shrink-0">{item.sym}</span>
                    {item.text}
                  </li>
                ))}
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
                    SAAS FOUNDER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    DATA ENGINEER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    FULL-STACK AI BUILDER
                  </div>
                </div>
                <div className="bg-squid-red/20 p-3 rounded flex items-center justify-center h-20">
                  <div className="font-orbitron font-bold text-squid-red text-sm text-center">
                    AUTOMATION ENGINEER
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

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block font-rajdhani font-bold text-xs text-squid-red tracking-widest mb-3 uppercase">
                  Recruiter Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-editorial cursor-hover"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block font-rajdhani font-bold text-xs text-squid-red tracking-widest mb-3 uppercase">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="input-editorial cursor-hover"
                  placeholder="Your company"
                  required
                />
              </div>

              <div>
                <label className="block font-rajdhani font-bold text-xs text-squid-red tracking-widest mb-3 uppercase">
                  Job Opportunity Details *
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-editorial cursor-hover resize-none"
                  placeholder="Describe the role and what makes this opportunity exciting..."
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
        <div className="text-center mt-12 pt-8 border-t border-squid-red/30">
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {[
              { label: "GITHUB", href: "https://github.com/Yuvakunaal" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/boggavarapu-yuva-satya-kunaal-127817290/" },
              { label: "DEV.TO", href: "https://dev.to/yuva_kunaal" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-orbitron font-bold text-gray-500 hover:text-squid-red transition-colors cursor-hover tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Squid Game shapes */}
          <div className="flex items-center justify-center gap-4 mb-5 text-squid-red/30 text-sm">
            <span>▲</span><span>●</span><span>■</span>
          </div>

          <p className="font-rajdhani text-gray-500 text-xs">
            © 2026 Boggavarapu Yuva Satya Kunaal · Player 457 · All rights reserved.
          </p>
          <p className="font-rajdhani text-squid-red/60 text-xs mt-1">
            "In the game of development, data drives decisions and code conquers challenges."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
