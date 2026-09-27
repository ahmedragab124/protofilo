import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmed-ragab-9a6680284" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/ahmedragab124" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/_abo__ragab/" },
];

function HeroSocials() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-[1040px]:col-start-2 max-[1040px]:row-start-2 max-[680px]:col-start-1 max-[680px]:row-start-3 transform-gpu"
      id="contact"
    >
      <p className="mb-2.5 ml-1.5 text-[10px] tracking-[.6px] text-[#617979]">
        CONNECT DIRECTLY
      </p>
      <div className="grid gap-2.5">
        {socials.map(({ label, icon: Icon, href }, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
            whileHover={{ x: 6, borderColor: "#76b9a8" }}
            className="flex min-h-[53px] items-center gap-3 rounded-[11px] border border-[#d8e6e1] bg-white/90 px-3 py-2 text-xs shadow-md shadow-slate-400/5 backdrop-blur-gpu transition-colors transform-gpu"
            href={href}
            target="_blank"
            rel="noreferrer"
            key={label}
          >
            <span className="grid h-[27px] w-[27px] place-items-center rounded-[7px] border border-[#d5eae4] bg-[#edf7f3] text-[#0f766e]">
              <Icon />
            </span>
            <span>{label}</span>
            <FaArrowUpRightFromSquare
              className="ml-auto text-[#768d8b]"
              aria-hidden="true"
            />
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
}

export default HeroSocials;
