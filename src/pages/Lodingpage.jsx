import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landingpage from "./Landingpage";
import LoaderContent from "../components/loader/LoaderContent";

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
            <LoaderContent progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>

      {showLanding && <Landingpage />}
    </>
  );
}

export default Lodingpage;
