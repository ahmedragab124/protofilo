import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaDesktop,
  FaBrain,
  FaGraduationCap,
  FaWrench,
} from "react-icons/fa6";

// Maps icon name strings (stored in Supabase) to actual React components
const ICON_MAP = {
  FaCode,
  FaDesktop,
  FaBrain,
  FaGraduationCap,
  FaWrench,
};

function ServiceCard({ service, index }) {
  // icon can be a React component (local data) or a string key (Supabase data)
  const Icon =
    typeof service.icon === "function"
      ? service.icon
      : ICON_MAP[service.icon] || ICON_MAP[service.iconName] || FaCode;


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -7 }}
      className="group flex flex-col justify-between rounded-2xl border border-[#1d444b] bg-[#122c31] p-7 sm:p-8 transition-all duration-300 hover:bg-[#18393f] hover:border-[#20958a] hover:shadow-[0_20px_45px_rgba(32,149,138,0.22)] transform-gpu"
    >
      <div>
        {/* Header Row: Number Badge & Icon Container */}
        <div className="flex items-center justify-between">
          <span className="flex h-7 px-3 items-center justify-center rounded-full border border-[#20958a]/40 bg-[#0f766e]/25 text-[11px] font-bold text-[#76b9a8]">
            {service.id}
          </span>
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#20958a]/40 bg-[#0f766e]/25 text-[#76b9a8] transition-all duration-300 group-hover:bg-[#20958a] group-hover:text-white group-hover:border-[#20958a] group-hover:shadow-[0_0_15px_#20958a]">
            <Icon className="text-sm sm:text-base" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#e7f4f0] transition-colors group-hover:text-[#76b9a8]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#9ebbb6]">
          {service.description}
        </p>
      </div>

      {/* Footer Link & Divider */}
      <div className="mt-8 border-t border-[#1e484f] pt-4">
        <a
          href={service.linkUrl}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#76b9a8] transition-all group-hover:text-white group-hover:translate-x-1"
        >
          {service.linkText}{" "}
          <FaArrowUpRightFromSquare className="text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
