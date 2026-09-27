import { motion } from "framer-motion";
import { FaCircleCheck, FaCode, FaBrain, FaGears, FaUserCheck } from "react-icons/fa6";

// Maps icon name strings (stored in Supabase) to actual React components
const ICON_MAP = {
  FaCode,
  FaBrain,
  FaGears,
  FaUserCheck,
};

function SkillCategoryCard({ cat, idx }) {
  // icon can be a React component (local data) or a string key (Supabase data)
  const Icon =
    typeof cat.icon === "function"
      ? cat.icon
      : ICON_MAP[cat.icon] || ICON_MAP[cat.iconName] || FaCode;


  return (
    <motion.div
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
}

export default SkillCategoryCard;
