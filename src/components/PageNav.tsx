import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface PageNavProps {
  currentPage: string;
  currentPageHref?: string;
}

const PageNav: React.FC<PageNavProps> = ({ currentPage, currentPageHref }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-red">
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={() => navigate("/")}
            className="text-xl sm:text-2xl font-orbitron font-black neon-text cursor-hover"
          >
            PLAYER 457
          </button>

          <div className="flex items-center gap-2 text-xs font-orbitron tracking-widest">
            <button
              onClick={() => navigate("/")}
              className="text-gray-500 hover:text-squid-red transition-colors cursor-hover"
            >
              HOME
            </button>
            <span className="text-squid-red/30">/</span>
            {currentPageHref ? (
              <Link
                to={currentPageHref}
                className="text-gray-400 hover:text-squid-red transition-colors cursor-hover"
              >
                {currentPage}
              </Link>
            ) : (
              <span className="text-squid-red">{currentPage}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PageNav;
