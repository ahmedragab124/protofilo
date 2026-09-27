import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function ProjectTrack({
  circularProjects,
  trackX,
  cardGap,
  cardWidth,
  virtualIndex,
  enableTransition = true,
  onHoverStart,
  onHoverEnd,
  onCardClick,
}) {
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="relative py-10 overflow-hidden select-none [perspective:1200px]"
    >
      <motion.div
        animate={{ x: trackX }}
        transition={
          enableTransition
            ? {
                duration: 0.65,
                ease: [0.25, 1, 0.5, 1], // Ultra-smooth cubic bezier easing
              }
            : { duration: 0 }
        }
        style={{ gap: `${cardGap}px`, transformStyle: "preserve-3d" }}
        className="flex items-center w-max"
      >
        {circularProjects.map((project, idx) => (
          <ProjectCard
            key={`${project.id}-circ-${idx}`}
            project={project}
            cardWidth={cardWidth}
            indexOffset={idx - virtualIndex}
            isActive={idx === virtualIndex}
            onClick={() => onCardClick(idx)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectTrack;
