import { useState } from "react";
import { motion } from "framer-motion";
import OrbitTimeline from "../componant/experience/OrbitTimeline";
import ExperienceDetailCard from "../componant/experience/ExperienceDetailCard";
import { experienceData } from "../componant/experience/experienceData";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active item 02 (NTI Tanta)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto my-24 w-[calc(100%-32px)] sm:w-[calc(100%-44px)] max-w-[1080px]"
      id="experience"
    >
      {/* Header Section */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d2e9e1] bg-[#edf7f3] px-3.5 py-1 text-[10px] font-semibold tracking-[.6px] text-[#0f766e] uppercase">
          CAREER HISTORY
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#19333a] sm:text-4xl">
          Professional Journey
        </h2>
        <p className="mt-2.5 max-w-xl text-xs sm:text-[13px] leading-relaxed text-[#526b71]">
          An interactive circular timeline tracing engineering roles, team contributions, and full stack milestones.
        </p>
      </div>

      {/* 2-Column Orbit Timeline + Detail Card */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 items-center">
        {/* Left Interactive Orbit Selector */}
        <OrbitTimeline
          experiences={experienceData}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        {/* Right Detail Display Card */}
        <ExperienceDetailCard
          experience={experienceData[activeIndex]}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </motion.section>
  );
}

export default Experience;
