import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-squid-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background shapes — very subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-squid-red rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-4 border-squid-pink animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
      </div>

      <div className="text-center z-10 max-w-lg">
        {/* Token */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-squid-pink to-squid-red animate-neon-pulse flex items-center justify-center">
          <span className="text-4xl font-orbitron font-black text-squid-black">404</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-orbitron font-black neon-text mb-4">
          PLAYER ELIMINATED
        </h1>

        <p className="text-squid-cyan font-rajdhani text-xl mb-3 tracking-widest">
          THIS AREA DOES NOT EXIST
        </p>

        <p className="font-rajdhani text-gray-400 text-sm mb-10 leading-relaxed">
          You wandered into restricted territory. The guards have been notified.
          <br />
          Return to the game before it's too late.
        </p>

        <div className="flex items-center justify-center gap-6 mb-10 text-squid-red/50 text-2xl">
          <span>▲</span><span>●</span><span>■</span>
        </div>

        <button
          onClick={() => navigate("/")}
          className="btn-game cursor-hover px-10 py-4 text-base"
        >
          RETURN TO THE GAME
        </button>
      </div>
    </div>
  );
};

export default NotFound;
