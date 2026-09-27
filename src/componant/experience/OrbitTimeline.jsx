import { motion, AnimatePresence } from "framer-motion";
import { FaCompass, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function OrbitTimeline({ experiences, activeIndex, onSelect }) {
  const total = experiences.length;
  const prevIdx = (activeIndex - 1 + total) % total;
  const nextIdx = (activeIndex + 1) % total;

  // Render 3 constant orbital slots for desktop vertical view
  const visibleNodes = [
    { item: experiences[prevIdx], slot: "top", index: prevIdx, xOffset: 0 },
    { item: experiences[activeIndex], slot: "middle", index: activeIndex, xOffset: 70 },
    { item: experiences[nextIdx], slot: "bottom", index: nextIdx, xOffset: 0 },
  ];

  return (
    <>
      {/* ========================================================
          MOBILE Orbit Arc Hub (< 640px)
          Ultra Premium Horizontal Arc Orbit with Tap & Swipe Navigation
          ======================================================== */}
      <div className="block sm:hidden mb-2">
        <div className="relative overflow-hidden rounded-3xl border border-[#0f766e]/30 bg-gradient-to-br from-[#0c1f24] via-[#112d33] to-[#08181c] p-4 text-white shadow-xl shadow-[#0c1f24]/20">
          {/* Decorative Subtle Orbit Grid SVG */}
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

          {/* Compass & Header Tag */}
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f766e]/40 text-[#2dd4bf] text-xs">
                <FaCompass />
              </span>
              <span className="text-[10px] font-bold tracking-[2px] text-[#2dd4bf] uppercase">
                ORBIT NAVIGATION
              </span>
            </div>

            {/* Step Counter Badge */}
            <span className="rounded-full bg-[#14b8a6]/15 border border-[#14b8a6]/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#2dd4bf]">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          {/* Horizontal Curved Orbit Badges */}
          <div className="relative z-10 flex items-center justify-between px-1 py-2">
            {/* Prev Quick Arrow */}
            <button
              onClick={() => onSelect((activeIndex - 1 + total) % total)}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-teal-200 transition active:scale-90 hover:bg-white/20"
              aria-label="Previous Orbit"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {/* Orbit Badges Along Horizontal Arc */}
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

                    {/* Active Glowing Indicator Dot */}
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

            {/* Next Quick Arrow */}
            <button
              onClick={() => onSelect((activeIndex + 1) % total)}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-teal-200 transition active:scale-90 hover:bg-white/20"
              aria-label="Next Orbit"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          {/* Active Node Sub-Title Banner */}
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
                  {experiences[activeIndex].role}
                </span>
                <span className="text-teal-400/60">•</span>
                <span className="text-[11px] text-teal-300/80 font-medium">
                  {experiences[activeIndex].company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP & TABLET Orbit Arc (>= 640px)
          Vertical 3D Curved Arc Selector
          ======================================================== */}
      <div className="relative hidden sm:flex flex-col justify-between py-6 pr-0 sm:pr-6 min-h-[420px]">
        {/* SVG Background Curved Arc */}
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

        {/* Orbit Center Hub Marker */}
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

        {/* 3-Slot Vertical Orbit Carousel */}
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
                    {/* ID Badge */}
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

                    {/* Node Details */}
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

                    {/* Active Dot Indicator */}
                    {isActive && (
                      <span
                        className="ml-auto h-2.5 w-2.5 rounded-full bg-[#0f766e] shadow-[0_0_8px_#0f766e] animate-pulse"
                      />
                    )}
                  </motion.button>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrbitTimeline;
