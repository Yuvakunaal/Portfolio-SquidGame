import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-squid-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            {/* Squid Game Token */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-squid-pink to-squid-red animate-neon-pulse flex items-center justify-center">
              <div className="text-5xl font-orbitron font-black text-squid-black">
                457
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-orbitron font-black neon-text mb-4">
            ENTERING THE GAME
          </h1>

          <div className="text-xl font-rajdhani text-squid-cyan loading-text">
            Loading
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 mx-auto bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-squid-red to-squid-pink animate-pulse"></div>
        </div>

        <p className="mt-6 text-sm text-gray-400 font-rajdhani">
          Welcome to Player 456's Portfolio
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
