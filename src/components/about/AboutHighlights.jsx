import { motion } from "framer-motion";
import { FaLaptopCode, FaGraduationCap, FaUserGroup, FaAward } from "react-icons/fa6";

const highlights = [
  {
    icon: FaLaptopCode,
    title: "DEPI Graduate",
    subtitle: "React Frontend Track",
    accentColor: "text-[#0f766e]",
    bgAccent: "bg-[#edf7f3] border-[#d2e9e1]",
  },
  {
    icon: FaGraduationCap,
    title: "CS & AI Degree",
    subtitle: "Computers & AI (SVNU 2023–2028)",
    accentColor: "text-[#19333a]",
    bgAccent: "bg-[#f4f8f7] border-[#dce9e4]",
  },
  {
    icon: FaUserGroup,
    title: "ICPC Mentor",
    subtitle: "Algorithmic Coaching & Leadership",
    accentColor: "text-[#0f766e]",
    bgAccent: "bg-[#edf7f3] border-[#d2e9e1]",
  },
  {
    icon: FaAward,
    title: "ECPC & ACPC Finalist",
    subtitle: "Competitive Programming Contestant",
    accentColor: "text-[#d86d50]",
    bgAccent: "bg-[#fdf3f0] border-[#f5d8d0]",
  },
];

function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 self-center">
      {highlights.map((item, idx) => {
        const Icon = item.icon;

        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={item.title}
            className="group rounded-2xl border border-[#dce9e4] bg-[#f8faf9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0f766e]/40 hover:bg-white hover:shadow-lg hover:shadow-[#0f766e]/5"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${item.bgAccent} ${item.accentColor} transition-transform group-hover:scale-110`}
            >
              <Icon className="text-base" />
            </div>
            <h3 className="mt-3.5 text-base font-extrabold text-[#19333a]">
              {item.title}
            </h3>
            <p className="mt-1 text-[11px] font-medium leading-snug text-[#627a7b]">
              {item.subtitle}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AboutHighlights;
