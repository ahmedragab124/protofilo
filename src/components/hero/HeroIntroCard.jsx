import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

function HeroIntroCard() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-[292px] rounded-[16px] border border-[#dce5ef] bg-white/90 p-[23px_24px_26px] shadow-xl shadow-slate-400/10 backdrop-blur-gpu transform-gpu max-[1040px]:row-start-2 max-[680px]:row-start-2 max-[680px]:max-w-none"
    >
      <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.45px] text-[#0f766e]">
        <span className="h-3.5 w-[5px] rounded-[3px] bg-[#20958a]" />{" "}
        CS &amp; AI STUDENT • REACT &amp; C++
      </p>
      <p className="mb-[21px] max-w-[245px] text-xs leading-[1.65] text-[#526b71]">
        Computer Science &amp; AI Undergrad, ICPC Community Mentor, and Frontend Developer crafting high-performance web platforms.
      </p>
      <div className="flex items-center gap-2.5">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-[17px] py-2.5 text-xs !text-white shadow-lg shadow-[#0f766e]/20 transition hover:-translate-y-0.5 active:scale-95"
          href="/Ahmed_Ragab_CV.pdf"
          download="Ahmed_Ragab_CV.pdf"
        >
          Download CV <FaArrowDown />
        </a>
        <a
          className="rounded-full border border-[#d0e1dc] bg-white px-4 py-[9px] text-xs text-[#2c4a4d] transition hover:border-[#0f766e] hover:text-[#0f766e] active:scale-95"
          href="#work"
        >
          View Work
        </a>
      </div>
    </motion.section>
  );
}

export default HeroIntroCard;
