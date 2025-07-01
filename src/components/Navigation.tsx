import React, { useState } from "react";

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "LOBBY" },
    { id: "about", label: "PLAYER" },
    { id: "skills", label: "ABILITIES" },
    { id: "projects", label: "CHALLENGES" },
    { id: "contact", label: "ELIMINATION" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass-red">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-orbitron font-black neon-text cursor-hover">
              PLAYER 456
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-rajdhani font-semibold tracking-wider transition-all duration-300 cursor-hover ${
                    currentSection === item.id
                      ? "text-squid-red neon-text"
                      : "text-squid-white hover:text-squid-cyan"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-squid-white cursor-hover z-50"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-squid-red transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <div
                  className={`w-full h-0.5 bg-squid-red transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-full h-0.5 bg-squid-red transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden glass-red transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left font-rajdhani font-semibold tracking-wider transition-all duration-300 cursor-hover ${
                  currentSection === item.id
                    ? "text-squid-red neon-text"
                    : "text-squid-white hover:text-squid-cyan"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
