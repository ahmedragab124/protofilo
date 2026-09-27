import { motion, AnimatePresence } from "framer-motion";
import { FaCompass, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function MobileOrbitArc({ experiences, activeIndex, total, onSelect }) {
  return (
    <div className="block sm:hidden mb-2">
      <div className="relative overflow-hidden rounded-3xl border border-[#0f766e]/30 bg-gradient-to-br from-[#0c1f24] via-[#112d33] to-[#08181c] p-4 text-white shadow-xl shadow-[#0c1f24]/20">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 320 120"
          fill="none"
        >
          <path
            d="M -10,80 Q 160,-20 330,80"
            stroke="#14b8a6"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        <div className="mb-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f766e]/40 text-[#2dd4bf] text-xs">
              <FaCompass />
            </span>
            <span className="text-[10px] font-bold tracking-[2px] text-[#2dd4bf] uppercase">
              ORBIT NAVIGATION
            </span>
          </div>

          <span className="rounded-full bg-[#14b8a6]/15 border border-[#14b8a6]/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#2dd4bf]">
            0{activeIndex + 1} / 0{total}
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between px-1 py-2">
          <button
            onClick={() => onSelect((activeIndex - 1 + total) % total)}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-teal-200 transition active:scale-90 hover:bg-white/20"
            aria-label="Previous Orbit"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {experiences.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSelect(idx)}
                  animate={{
                    y: isActive ? -5 : 0,
                    scale: isActive ? 1.15 : 0.92,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative flex h-11 w-11 flex-col items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] text-white ring-4 ring-[#14b8a6]/30 shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                      : "bg-white/10 text-teal-200 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  <span className="font-mono text-xs font-bold">{item.id}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeOrbitPulse"
                      className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf]"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={() => onSelect((activeIndex + 1) % total)}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-teal-200 transition active:scale-90 hover:bg-white/20"
            aria-label="Next Orbit"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        <div className="mt-2 text-center pt-2 border-t border-teal-500/15">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-xs font-bold text-teal-100">
                {experiences[activeIndex]?.role}
              </span>
              <span className="text-teal-400/60">•</span>
              <span className="text-[11px] text-teal-300/80 font-medium">
                {experiences[activeIndex]?.company}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default MobileOrbitArc;
