import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaGears,
  FaUserCheck,
  FaCircleCheck,
} from "react-icons/fa6";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: FaCode,
    badge: "PRIMARY STACK",
    badgeColor: "bg-teal-500/10 text-teal-700 border-teal-500/30",
    skills: [
      "React.js (React 19)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite & Build Tools",
      "Framer Motion",
      "Responsive Web Design",
      "HTML5 & Semantic UI",
    ],
  },
  {
    title: "Core CS & Algorithms",
    icon: FaBrain,
    badge: "COMPETITIVE RANKED",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    skills: [
      "C++ Programming",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Competitive Programming (ECPC Finalist)",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },
  {
    title: "Architecture & Tools",
    icon: FaGears,
    badge: "PRODUCTION READY",
    badgeColor: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30",
    skills: [
      "RESTful API Integration",
      "Git & GitHub Version Control",
      "React Hook Form & Zod",
      "State Management",
      "Lighthouse Performance Optimization",
      "Clean Code Architecture",
    ],
  },
  {
    title: "Professional Competencies",
    icon: FaUserCheck,
    badge: "DEPI CERTIFIED",
    badgeColor: "bg-teal-600/10 text-teal-800 border-teal-600/30",
    skills: [
      "DEPI React Track Graduate",
      "ICPC SVNU Community Mentor",
      "Business English Communication",
      "Agile & Team Collaboration",
      "Freelancing & Client Delivery",
    ],
  },
];

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
      {/* Header */}
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl border border-[#dce9e4] bg-white p-6 sm:p-7 shadow-lg shadow-slate-400/5 transition-all duration-300 hover:border-[#0f766e]/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#edf7f3] border border-[#d5eae4] text-[#0f766e]">
                    <Icon className="text-base" />
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#19333a]">
                    {cat.title}
                  </h3>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider uppercase ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-[#f0f6f4]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#dce9e4] bg-[#f8faf9] px-3 py-1.5 text-xs font-semibold text-[#2c4a4d] transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e]"
                  >
                    <FaCircleCheck className="text-[#0f766e] text-[11px]" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default TechStack;
