import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCode, FaStar, FaImage } from "react-icons/fa6";

function ProjectCard({ project, isActive, indexOffset = 0, cardWidth = 340, onClick }) {
  const [imgError, setImgError] = useState(false);

  const safeTags = Array.isArray(project?.tags)
    ? project.tags
    : typeof project?.tags === "string"
    ? project.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const demoUrl = project?.demoUrl || project?.demo_url || "#";
  const githubUrl = project?.githubUrl || project?.github_url || "#";

  const dist = indexOffset;
  const absDist = Math.abs(dist);

  let rotateY = 0;
  let scale = 1;
  let opacity = 1;
  let zIndex = 30;
  let y = -8;

  if (dist === 0) {
    rotateY = 0;
    scale = 1;
    opacity = 1;
    zIndex = 30;
    y = -10;
  } else {
    rotateY = dist > 0 ? -22 : 22;
    if (absDist >= 2) rotateY = dist > 0 ? -36 : 36;
    scale = Math.max(0.72, 1 - absDist * 0.12);
    opacity = Math.max(0.35, 1 - absDist * 0.28);
    zIndex = Math.max(1, 30 - absDist * 10);
    y = absDist * 6;
  }

  return (
    <motion.div
      onClick={onClick}
      style={{
        width: `${cardWidth}px`,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale,
        opacity,
        rotateY,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
      }}
      className={`flex flex-col justify-between shrink-0 rounded-2xl border bg-white overflow-hidden cursor-pointer transition-[border-color,box-shadow,opacity] duration-300 ${
        isActive
          ? "border-[#0f766e] shadow-[0_20px_45px_rgba(15,118,110,0.22)] ring-2 ring-[#0f766e]/20"
          : "border-[#dce9e4] shadow-sm hover:border-[#9acfc2] hover:opacity-90"
      }`}
    >
      {/* Card Image Header */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#eaf4f1]">
        {project?.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback placeholder */
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#edf7f3] to-[#d5eae4]">
            <FaImage className="text-3xl text-[#0f766e]/40" />
            <span className="px-4 text-center text-[11px] font-semibold text-[#0f766e]/60 leading-snug">
              {project?.title || "Project"}
            </span>
          </div>
        )}

        {/* Number Badge */}
        <span className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold text-[#19333a] shadow-sm">
          {project?.id || "01"}
        </span>

        {/* Category Badge */}
        <span className="absolute top-3 left-11 rounded-full bg-white/95 px-3 py-1 text-[9px] font-bold tracking-wider text-[#0f766e] shadow-sm uppercase">
          {project?.category || "PORTFOLIO"}
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
            {project?.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-[#526b71] line-clamp-3">
            {project?.description}
          </p>

          {/* Tag Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {safeTags.map((tag) => (
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
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#0f766e] px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-md shadow-[#0f766e]/20 transition hover:-translate-y-0.5 hover:bg-[#0b625c]"
              >
                Live Demo <FaArrowUpRightFromSquare className="text-[10px]" />
              </a>
              <a
                href={githubUrl}
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
