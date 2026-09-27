import { motion } from "framer-motion";
import { skillCategories } from "../../data/skillsData";
import SkillCategoryCard from "./SkillCategoryCard";

function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto my-20 w-[calc(100%-32px)] sm:w-[calc(100%-44px)] max-w-[1080px]"
      id="skills"
    >
      <div className="mb-10 text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d2e9e1] bg-[#edf7f3] px-3.5 py-1 text-[10px] font-bold tracking-[.6px] text-[#0f766e] uppercase">
          JOB MARKET SKILLS MATRIX
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#19333a] sm:text-4xl">
          Technical Stack &amp; Core Competencies
        </h2>
        <p className="mt-2.5 max-w-xl text-xs sm:text-[13px] leading-relaxed text-[#526b71]">
          A comprehensive breakdown of technical proficiencies, engineering fundamentals, and certified professional skills for hiring managers and technical teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <SkillCategoryCard key={cat.title} cat={cat} idx={idx} />
        ))}
      </div>
    </motion.section>
  );
}

export default TechStack;
