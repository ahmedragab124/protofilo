import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaUserGroup,
} from "react-icons/fa6";

const points = [
  "DEPI React Frontend Track Graduate",
  "Computer Science & AI Undergrad (SVNU 2nd Year)",
  "ICPC SVNU Community Mentor & Algorithm Coach",
  "C++ Data Structures & Problem Solving Expert",
];

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

function Aboutme() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mb-20 mt-8 min-h-[465px] w-[calc(100%-44px)] max-w-[1080px] rounded-3xl border border-[#dce9e4] bg-white p-7 sm:p-11 shadow-xl shadow-slate-400/5 max-[760px]:w-[calc(100%-32px)]"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-14">
        {/* Left Text & Value Prop */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex rounded-full border border-[#d2e9e1] bg-[#edf7f3] px-3.5 py-1 text-[10px] font-bold tracking-[.6px] text-[#0f766e] uppercase">
              ABOUT AHMED RAGAB
            </span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black leading-[1.1] tracking-tight text-[#19333a]">
            React Frontend Engineer &amp; CS &amp; AI Specialist.
          </h2>

          <p className="mt-4 text-xs sm:text-[13.5px] leading-relaxed text-[#526b71]">
            Graduate of the <strong className="text-[#19333a]">Digital Egypt Pioneers Initiative (DEPI) — React Frontend Track</strong>. Second-year Computer Science &amp; Artificial Intelligence undergrad at South Valley National University with a strong competitive programming foundation (<strong className="text-[#0f766e]">ECPC &amp; ACPC Contest Finalist</strong>) and ICPC community mentor.
          </p>

          {/* Key Competencies Checklist */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((point) => (
              <div
                className="flex items-center gap-2.5 text-xs font-semibold text-[#2c4a4d]"
                key={point}
              >
                <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full border border-[#d0e8e1] bg-[#edf7f3] text-[9px] text-[#0f766e]">
                  <FaCheck />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0f766e] px-5 py-2.5 text-xs font-bold !text-white shadow-lg shadow-[#0f766e]/20 transition hover:-translate-y-0.5 hover:bg-[#0b625c]"
              href="#contact"
            >
              Hire Me <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[#d2e9e1] bg-[#f8faf9] px-4 py-2.5 text-xs font-semibold text-[#2c4a4d] transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e]"
              href="#experience"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* Right Highlights Cards Grid */}
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
      </div>
    </motion.section>
  );
}

export default Aboutme;
