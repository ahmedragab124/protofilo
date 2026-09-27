import { motion, AnimatePresence } from "framer-motion";
import { FaCompass } from "react-icons/fa6";

function DesktopOrbitArc({ visibleNodes, activeIndex, onSelect }) {
  return (
    <div className="relative hidden sm:flex flex-col justify-between py-6 pr-0 sm:pr-6 min-h-[420px]">
      <svg
        className="pointer-events-none absolute left-[45px] top-6 h-[calc(100%-48px)] w-[230px]"
        viewBox="0 0 230 360"
        fill="none"
      >
        <motion.path
          d="M 52,20 C 225,90 225,270 52,340"
          stroke="#0f766e"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          animate={{
            strokeDashoffset: -activeIndex * 55,
            strokeOpacity: 0.6,
          }}
          transition={{
            strokeDashoffset: { type: "spring", stiffness: 180, damping: 20 },
          }}
        />
      </svg>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 text-[10px] font-bold text-[#718a87] tracking-widest uppercase hidden lg:flex">
        <motion.div
          animate={{ rotate: activeIndex * 90 }}
          transition={{ type: "spring", stiffness: 150, damping: 16 }}
          className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-[#0f766e]/40 bg-white text-[#0f766e] shadow-md transform-gpu"
        >
          <div className="animate-compass-spin">
            <FaCompass className="text-base" />
          </div>
        </motion.div>
        <span className="text-[9.5px] tracking-[2px]">ORBIT</span>
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-7 min-h-[380px]">
        {visibleNodes.map(({ item, slot, index, xOffset }) => {
          const isActive = slot === "middle";

          return (
            <motion.div key={slot} className="w-fit">
              <AnimatePresence mode="wait">
                <motion.button
                  key={item.id}
                  onClick={() => onSelect(index)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.78,
                    x: xOffset,
                    scale: isActive ? 1.05 : 0.96,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  whileHover={{ scale: 1.05, x: xOffset + 6 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-3.5 rounded-full p-2.5 pr-6 pl-2.5 text-left transition-all duration-300 w-fit max-w-[280px] ${
                    isActive
                      ? "border-2 border-[#0f766e] bg-white shadow-[0_12px_30px_rgba(15,118,110,0.22)] ring-2 ring-[#0f766e]/20"
                      : "border border-[#dce9e4] bg-[#f8faf9] opacity-75 hover:opacity-100 hover:border-[#9acfc2]"
                  }`}
                >
                  <motion.span
                    animate={isActive ? { rotate: [0, 360] } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-[#0f766e] text-white shadow-md shadow-[#0f766e]/30"
                        : "bg-[#edf7f3] text-[#0f766e]"
                    }`}
                  >
                    {item.id}
                  </motion.span>

                  <div className="flex flex-col">
                    <span
                      className={`text-xs sm:text-[13px] font-bold leading-snug ${
                        isActive ? "text-[#19333a]" : "text-[#526b71]"
                      }`}
                    >
                      {item.nodeLabel}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#718a87]">
                      {item.nodeSub}
                    </span>
                  </div>

                  {isActive && (
                    <span className="ml-auto h-2.5 w-2.5 rounded-full bg-[#0f766e] shadow-[0_0_8px_#0f766e] animate-pulse" />
                  )}
                </motion.button>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default DesktopOrbitArc;
