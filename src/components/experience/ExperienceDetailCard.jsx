import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowDown,
  FaArrowUp,
  FaCircleCheck,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaLaptopCode,
  FaUserGroup,
} from "react-icons/fa6";

// Maps icon name strings (stored in Supabase) to actual React components
const ICON_MAP = {
  FaGraduationCap,
  FaTrophy,
  FaLaptopCode,
  FaUserGroup,
  FaBriefcase,
};

function ExperienceDetailCard({ experience, onPrev, onNext }) {
  // companyIcon can be a React component (local data) or a string key (Supabase data)
  const CompanyIcon =
    typeof experience.companyIcon === "function"
      ? experience.companyIcon
      : ICON_MAP[experience.companyIcon] || FaBriefcase;

  return (
    <div className="relative rounded-3xl border border-[#dce9e4] bg-white p-7 sm:p-10 shadow-xl shadow-slate-400/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Header Row: Date Badge & Navigation Arrows */}
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex rounded-full border border-[#d2e9e1] bg-[#edf7f3] px-3.5 py-1 text-[10px] sm:text-[10.5px] font-bold tracking-[.6px] text-[#0f766e] uppercase">
              {experience.period}
            </span>

            {/* Up / Down Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onPrev}
                aria-label="Previous role"
                className="grid h-8 w-8 place-items-center rounded-full border border-[#d2e9e1] bg-[#f8faf9] text-[#2c4a4d] transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e] active:scale-95"
              >
                <FaArrowUp className="text-[10px]" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next role"
                className="grid h-8 w-8 place-items-center rounded-full border border-[#d2e9e1] bg-[#f8faf9] text-[#2c4a4d] transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e] active:scale-95"
              >
                <FaArrowDown className="text-[10px]" />
              </button>
            </div>
          </div>

          {/* Role Title */}
          <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#19333a]">
            {experience.role}
          </h3>

          {/* Company & Location Info */}
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#526b71]">
            <CompanyIcon className="text-[#0f766e]" />
            <span>{experience.company}</span>
            <span className="text-[#a5b9b6]">•</span>
            <span className="text-[#718a87]">{experience.location}</span>
          </div>

          <div className="my-5 border-t border-[#eaf2ef]" />

          {/* Summary Paragraph */}
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#526b71]">
            {experience.summary}
          </p>

          {/* Bullet Points */}
          <div className="mt-5 flex flex-col gap-3">
            {experience.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[12.5px] leading-relaxed text-[#2c4a4d]">
                <FaCircleCheck className="mt-0.5 shrink-0 text-[#0f766e] text-xs" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Skills & Competencies */}
          <div className="mt-8 pt-5 border-t border-[#eaf2ef]">
            <p className="text-[10px] font-bold tracking-widest text-[#718a87] uppercase">
              TECHNOLOGIES &amp; COMPETENCIES
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#d2e9e1] bg-[#f7faf8] px-3 py-1.5 text-[11px] font-semibold text-[#2c4a4d]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ExperienceDetailCard;
