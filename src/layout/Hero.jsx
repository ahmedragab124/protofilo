import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const socials = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahmed-ragab-9a6680284" },
  { label: "GitHub", icon: FaGithub, href: "https://github.com/ahmedragab124" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/_abo__ragab/" },
];

const phrases = [
  "AHMED RAGAB",
  "CS & AI STUDENT",
  "ICPC MENTOR",
  "FRONTEND DEVELOPER",
  "COMPETITIVE PROGRAMMER",
];

const floatingBadges = [
  { text: "<React.js 19 />", top: "8%", left: "4%", delay: 0 },
  { text: "C++ & OOP", top: "18%", right: "5%", delay: 0.5 },
  { text: "ICPC Mentor", bottom: "16%", left: "5%", delay: 1 },
  { text: "DEPI Graduate", bottom: "12%", right: "4%", delay: 1.5 },
];

function TypewriterHeading() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];

    let speed = isDeleting ? 45 : 95;

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2200;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
      speed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const currentText = phrases[textIndex].substring(0, charIndex);
  const parts = currentText.split(" ");
  const firstWord = parts[0] || "";
  const restWords = parts.slice(1).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mb-12 flex h-[90px] items-center justify-center gap-4 text-[clamp(42px,7vw,90px)] font-extrabold leading-[.95] tracking-[-3px] max-[1040px]:mb-9 max-[680px]:mb-[30px] max-[680px]:h-[70px] max-[680px]:flex-wrap max-[680px]:gap-2 max-[680px]:text-center max-[680px]:text-[clamp(32px,10vw,55px)]"
    >
      <span className="text-transparent [-webkit-text-stroke:1.5px_#168b81]">
        {firstWord}
      </span>
      {restWords && (
        <strong className="font-extrabold text-[#19333a] [-webkit-text-stroke:0]">
          {restWords}
        </strong>
      )}
      <span className="inline-block w-[4px] h-[0.75em] bg-[#0f766e] animate-pulse rounded-full ml-1" />
    </motion.div>
  );
}

function Hero() {
  return (
    <main className="relative mx-auto flex min-h-[calc(100vh-64px)] w-[calc(100%-40px)] sm:w-[calc(100%-56px)] max-w-[1140px] flex-col justify-center py-14 pb-20 max-[1040px]:min-h-0 max-[1040px]:w-[calc(100%-32px)] max-[1040px]:max-w-[850px] max-[680px]:py-10">
      {/* ========================================================
          HERO STANDOUT FEATURE: Expanded Aurora Glows & Tech Grid Mesh
          ======================================================== */}
      
      {/* 1. Large Top-Left Aurora Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#0f766e]/35 via-[#14b8a6]/25 to-transparent blur-3xl"
      />

      {/* 2. Large Bottom-Right Aurora Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#20958a]/30 via-[#0d6e66]/20 to-transparent blur-3xl"
      />

      {/* 3. Center Ambient Light Aura */}
      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[#14b8a6]/20 blur-3xl"
      />

      {/* 4. Enhanced Geometric Tech Grid Pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.11]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="heroGridLarge" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0f766e" strokeWidth="1.2" />
            <circle cx="48" cy="48" r="2" fill="#0f766e" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGridLarge)" />
      </svg>

      {/* 5. Expanded Floating Interactive Tech Badges */}
      <div className="hidden sm:block pointer-events-none absolute inset-0 z-0">
        {floatingBadges.map((b) => (
          <motion.div
            key={b.text}
            style={{
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            }}
            className="absolute rounded-2xl border border-[#0f766e]/35 bg-white/85 px-4 py-2 font-mono text-xs font-bold text-[#0f766e] shadow-lg shadow-[#0f766e]/10 backdrop-blur-md"
          >
            {b.text}
          </motion.div>
        ))}
      </div>

      {/* Dynamic Typewriter Heading Title */}
      <TypewriterHeading />

      <div className="relative z-10 grid grid-cols-[1fr_1.25fr_1fr] items-center gap-11 max-[1040px]:grid-cols-2 max-[1040px]:gap-7 max-[680px]:grid-cols-1">
        {/* Left Intro Card */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-[292px] rounded-[16px] border border-[#dce5ef] bg-white/95 p-[23px_24px_26px] shadow-xl shadow-slate-400/10 backdrop-blur-md max-[1040px]:row-start-2 max-[680px]:row-start-2 max-[680px]:max-w-none"
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
              className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-[17px] py-2.5 text-xs !text-white shadow-lg shadow-[#0f766e]/20 transition hover:-translate-y-0.5"
              href="/Ahmed_Ragab_CV.pdf"
              download="Ahmed_Ragab_CV.pdf"
            >
              Download CV <FaArrowDown />
            </a>
            <a
              className="rounded-full border border-[#d0e1dc] bg-white px-4 py-[9px] text-xs text-[#2c4a4d] transition hover:border-[#0f766e] hover:text-[#0f766e]"
              href="#work"
            >
              View Work
            </a>
          </div>
        </motion.section>

        {/* Center Portrait Image with Full 720 Spin Entrance */}
        <motion.div
          className="flex justify-center max-[1040px]:col-span-2 max-[1040px]:row-start-1 max-[680px]:col-span-1 max-[680px]:row-start-1 [perspective:1000px]"
          aria-label="Ahmed Ragab portrait"
          initial={{
            opacity: 0,
            scale: 0.2,
            rotate: -720,
            rotateY: -360,
            y: 30,
          }}
          animate={{ opacity: 1, scale: 1, rotate: 0, rotateY: 0, y: 0 }}
          transition={{
            duration: 1.3,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.25,
          }}
        >
          <motion.div
            className="portrait-card cursor-pointer"
            whileHover={{ scale: 1.06, rotateY: 15, rotateX: -8, rotateZ: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <img
              src="/WhatsApp_Image_2026-09-25_at_7.13.50_PM-removebg-preview.png"
              alt="Ahmed Ragab"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Socials */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-[1040px]:col-start-2 max-[1040px]:row-start-2 max-[680px]:col-start-1 max-[680px]:row-start-3"
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
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                whileHover={{ x: 6, borderColor: "#76b9a8" }}
                className="flex min-h-[53px] items-center gap-3 rounded-[11px] border border-[#d8e6e1] bg-white/95 px-3 py-2 text-xs shadow-md shadow-slate-400/5 backdrop-blur-md transition-colors"
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
      </div>
    </main>
  );
}

export default Hero;
