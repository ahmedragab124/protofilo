import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCode, FaStar } from "react-icons/fa6";

function ProjectCard({ project, isActive, cardWidth = 340, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      style={{ width: `${cardWidth}px` }}
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.65,
        y: isActive ? -6 : 0,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`flex flex-col justify-between shrink-0 rounded-2xl border bg-white overflow-hidden cursor-pointer transition-all duration-300 ${
        isActive
          ? "border-[#0f766e] shadow-[0_20px_45px_rgba(15,118,110,0.18)] ring-2 ring-[#0f766e]/20 z-10"
          : "border-[#dce9e4] shadow-sm hover:border-[#9acfc2] hover:opacity-90"
      }`}
    >
      {/* Card Image Header */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#eaf4f1]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Number Badge */}
        <span className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-[#19333a] shadow-sm backdrop-blur-sm">
          {project.id}
        </span>

        {/* Category Badge */}
        <span className="absolute top-3 left-11 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold tracking-wider text-[#0f766e] shadow-sm backdrop-blur-sm uppercase">
          {project.category}
        </span>

        {/* Star Badge */}
        {isActive && (
          <span className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f766e] text-white shadow-md">
            <FaStar className="text-xs" />
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#19333a]">
            {project.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#526b71] line-clamp-3">
            {project.description}
          </p>

          {/* Tag Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-md px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold ${
                  isActive
                    ? "bg-[#edf7f3] text-[#0f766e] border border-[#cbe4dc]"
                    : "bg-[#f4f8f6] text-[#627a7b] border border-[#e2ece8]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="mt-6 border-t border-[#eaf2ef] pt-4 flex items-center justify-between">
          {isActive ? (
            <div className="flex w-full items-center justify-between gap-2.5">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0f766e] px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-md shadow-[#0f766e]/20 transition hover:-translate-y-0.5 hover:bg-[#0b625c]"
              >
                Live Demo <FaArrowUpRightFromSquare className="text-[10px]" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#2c4a4d] transition hover:text-[#0f766e]"
              >
                <FaCode className="text-xs" /> Source Code
              </a>
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#0f766e] transition hover:underline">
              Click to inspect <FaArrowUpRightFromSquare className="text-[10px]" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
