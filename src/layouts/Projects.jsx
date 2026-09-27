import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectTrack from "../components/projects/ProjectTrack";
import ProjectPagination from "../components/projects/ProjectPagination";
import { projectsData as fallbackProjects } from "../data/projectData";
import { getProjects } from "../lib/supabaseClient";

function Projects() {
  const [projectsList, setProjectsList] = useState(fallbackProjects);
  const numProjects = projectsList.length || 1;
  const [virtualIndex, setVirtualIndex] = useState(numProjects * 2);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjectsList(data);
          setVirtualIndex(data.length * 2);
        }
      } catch (err) {
        console.error("Error loading projects:", err);
      }
    }
    loadProjects();
  }, []);

  const activeIndex = ((virtualIndex % numProjects) + numProjects) % numProjects;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous Autoplay
  useEffect(() => {
    if (isPaused || numProjects <= 1) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setVirtualIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, numProjects]);

  // Seamless Infinite Loop Reset across 5 cloned sets
  useEffect(() => {
    if (virtualIndex >= numProjects * 3.5 || virtualIndex <= numProjects * 0.5) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setVirtualIndex(numProjects * 2 + activeIndex);
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [virtualIndex, numProjects, activeIndex]);

  const isMobile = windowWidth < 640;
  const cardWidth = isMobile ? Math.min(windowWidth - 56, 300) : 340;
  const cardGap = isMobile ? 12 : 20;
  const step = cardWidth + cardGap;
  const containerWidth = isMobile ? windowWidth - 32 : Math.min(windowWidth - 44, 1080);
  const centerOffset = (containerWidth - cardWidth) / 2;
  const trackX = -(virtualIndex * step) + centerOffset;

  const circularProjects = [
    ...projectsList,
    ...projectsList,
    ...projectsList,
    ...projectsList,
    ...projectsList,
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto my-16 w-[calc(100%-32px)] sm:w-[calc(100%-44px)] max-w-[1080px] overflow-hidden"
      id="work"
    >
      <ProjectHeader
        activeIndex={activeIndex}
        totalProjects={numProjects}
        onPrev={() => {
          setEnableTransition(true);
          setVirtualIndex((prev) => prev - 1);
        }}
        onNext={() => {
          setEnableTransition(true);
          setVirtualIndex((prev) => prev + 1);
        }}
      />

      <ProjectTrack
        circularProjects={circularProjects}
        trackX={trackX}
        cardGap={cardGap}
        cardWidth={cardWidth}
        virtualIndex={virtualIndex}
        enableTransition={enableTransition}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
        onCardClick={(targetIdx) => {
          setEnableTransition(true);
          setVirtualIndex(targetIdx);
        }}
      />

      <ProjectPagination
        projects={projectsList}
        activeIndex={activeIndex}
        onSelect={(targetIdx) => {
          setEnableTransition(true);
          setVirtualIndex((prev) => prev + (targetIdx - activeIndex));
        }}
      />
    </motion.section>
  );
}

export default Projects;
