
import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent! Welcome to the game!', {
        style: {
          background: '#ff0040',
          color: '#ffffff',
          border: '1px solid #ff69b4'
        }
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-squid-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black neon-text mb-4">
            FINAL ELIMINATION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-squid-red to-squid-pink mx-auto mb-6"></div>
          <p className="text-xl font-rajdhani text-squid-cyan">
            Ready to recruit Player 456? Send your invitation below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-red p-6 rounded-lg">
              <h3 className="text-2xl font-orbitron font-bold text-squid-red mb-6">
                RECRUITMENT DETAILS
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 bg-squid-red/20 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">Email</div>
                    <div className="font-rajdhani text-gray-300">player456@developer-games.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 bg-squid-red/20 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">💼</span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">LinkedIn</div>
                    <div className="font-rajdhani text-gray-300">/in/player-456-dev</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 bg-squid-red/20 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">💻</span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">GitHub</div>
                    <div className="font-rajdhani text-gray-300">github.com/player456</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 cursor-hover">
                  <div className="w-12 h-12 bg-squid-red/20 rounded-full flex items-center justify-center">
                    <span className="text-squid-red text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="font-rajdhani font-semibold text-squid-cyan">Status</div>
                    <div className="font-rajdhani text-gray-300">Available for Immediate Deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Rules */}
            <div className="glass p-6 rounded-lg">
              <h4 className="text-lg font-orbitron font-bold text-squid-cyan mb-4">
                RECRUITMENT RULES
              </h4>
              <ul className="space-y-2 font-rajdhani text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">•</span>
                  Response guaranteed within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">•</span>
                  Available for full-time opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">•</span>
                  Open to remote or hybrid work
                </li>
                <li className="flex items-center">
                  <span className="text-squid-red mr-2">•</span>
                  Ready to start immediately
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-red p-8 rounded-lg">
            <h3 className="text-2xl font-orbitron font-bold text-squid-red mb-6">
              SEND INVITATION
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
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover"
                  placeholder="your.email@company.com"
                  required
                />
              </div>
              
              <div>
                <label className="block font-rajdhani font-semibold text-squid-cyan mb-2">
                  COMPANY / ORGANIZATION
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block font-rajdhani font-semibold text-squid-cyan mb-2">
                  MISSION BRIEFING *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-squid-black/50 border border-squid-red/30 rounded font-rajdhani text-squid-white focus:border-squid-red focus:ring-1 focus:ring-squid-red transition-all duration-300 cursor-hover resize-none"
                  placeholder="Describe the challenge you want me to tackle..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-game py-4 cursor-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SENDING INVITATION...' : 'RECRUIT PLAYER 456'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-squid-red/30">
          <p className="font-rajdhani text-gray-400 text-sm">
            © 2024 Player 456. All rights reserved. | Built with React & Tailwind CSS
          </p>
          <p className="font-rajdhani text-squid-red text-xs mt-2">
            "In the game of development, you either code or you get eliminated."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
