import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landingpage from "./Landingpage";

function Lodingpage() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            // Trigger landing page mount right as loader slides up so entrance animations play visibly!
            setTimeout(() => setShowLanding(true), 550);
          }, 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 16) + 8;
        return next > 100 ? 100 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              opacity: 0.95,
              transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#0a191c] px-6 py-10 text-[#e7f4f0] selection:bg-[#0f766e]"
          >
            {/* Header info */}
            <div className="flex w-full max-w-5xl items-center justify-between text-xs tracking-widest text-[#76b9a8]/70 uppercase">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Ahmed Ragab
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Portfolio © 2026
              </motion.span>
            </div>

            {/* Center Content */}
            <div className="my-auto flex flex-col items-center text-center">
              {/* Animated title */}
              <div className="overflow-hidden mb-3">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  className="text-4xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#e7f4f0] via-[#76b9a8] to-[#0f766e]"
                >
                  AHMED RAGAB
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase text-[#769a93] font-medium"
              >
                Frontend Developer
              </motion.p>

              {/* Progress Bar Container */}
              <div className="relative mt-10 w-64 sm:w-80 h-1.5 overflow-hidden rounded-full bg-[#143036]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0f766e] via-[#20958a] to-[#76b9a8] shadow-[0_0_12px_#20958a]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Counter percentage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 font-mono text-3xl font-bold tracking-tighter text-[#76b9a8]"
              >
                {progress}
                <span className="text-sm font-normal text-[#0f766e]">%</span>
              </motion.div>
            </div>

            {/* Footer status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-xs text-[#527b75]"
            >
              <span className="h-2 w-2 rounded-full bg-[#20958a] animate-ping" />
              <span>Loading experience...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Landingpage after loader exits so all animations trigger visibly */}
      {showLanding && <Landingpage />}
    </>
  );
}

export default Lodingpage;
