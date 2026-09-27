import { motion } from "framer-motion";

function LoaderContent({ progress }) {
  return (
    <>
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

      <div className="my-auto flex flex-col items-center text-center">
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

        <div className="relative mt-10 w-64 sm:w-80 h-1.5 overflow-hidden rounded-full bg-[#143036]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0f766e] via-[#20958a] to-[#76b9a8] shadow-[0_0_12px_#20958a]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 font-mono text-3xl font-bold tracking-tighter text-[#76b9a8]"
        >
          {progress}
          <span className="text-sm font-normal text-[#0f766e]">%</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 text-xs text-[#527b75]"
      >
        <span className="h-2 w-2 rounded-full bg-[#20958a] animate-ping" />
        <span>Loading experience...</span>
      </motion.div>
    </>
  );
}

export default LoaderContent;
