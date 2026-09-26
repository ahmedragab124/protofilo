import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectHeader from "../componant/projects/ProjectHeader";
import ProjectCard from "../componant/projects/ProjectCard";
import ProjectPagination from "../componant/projects/ProjectPagination";
import { projectsData } from "../componant/projects/projectData";

function Projects() {
  const numProjects = projectsData.length;
  const [virtualIndex, setVirtualIndex] = useState(numProjects);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const activeIndex = ((virtualIndex % numProjects) + numProjects) % numProjects;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Infinite position reset loop
  useEffect(() => {
    if (virtualIndex >= numProjects * 2) {
      setVirtualIndex(numProjects + (virtualIndex % numProjects));
    } else if (virtualIndex < numProjects) {
      setVirtualIndex(numProjects + (virtualIndex % numProjects));
    }
  }, [virtualIndex, numProjects]);

  const handlePrev = () => {
    setVirtualIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setVirtualIndex((prev) => prev + 1);
  };

  const handleSelectDot = (targetIdx) => {
    const currentActive = activeIndex;
    const diff = targetIdx - currentActive;
    setVirtualIndex((prev) => prev + diff);
  };

  const circularProjects = [...projectsData, ...projectsData, ...projectsData];

  // Dynamic responsive sizing math
  const isMobile = windowWidth < 640;
  const cardWidth = isMobile ? Math.min(windowWidth - 56, 300) : 340;
  const cardGap = isMobile ? 12 : 20;
  const step = cardWidth + cardGap;

  const containerWidth = isMobile ? windowWidth - 32 : Math.min(windowWidth - 44, 1080);
  const centerOffset = (containerWidth - cardWidth) / 2;
  const trackX = -(virtualIndex * step) + centerOffset;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto my-16 w-[calc(100%-32px)] sm:w-[calc(100%-44px)] max-w-[1080px] overflow-hidden"
      id="work"
    >
      {/* Header Component */}
      <ProjectHeader
        activeIndex={activeIndex}
        totalProjects={numProjects}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Track Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative py-6 overflow-hidden"
      >
        <motion.div
          animate={{ x: trackX }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 24,
            mass: 0.8,
          }}
          style={{ gap: `${cardGap}px` }}
          className="flex items-center w-max"
        >
          {circularProjects.map((project, idx) => (
            <ProjectCard
              key={`${project.id}-circ-${idx}`}
              project={project}
              cardWidth={cardWidth}
              isActive={idx === virtualIndex}
              onClick={() => setVirtualIndex(idx)}
            />
          ))}
        </motion.div>
      </div>

      {/* Pagination Component */}
      <ProjectPagination
        projects={projectsData}
        activeIndex={activeIndex}
        onSelect={handleSelectDot}
      />
    </motion.section>
  );
}

export default Projects;
