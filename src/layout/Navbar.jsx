import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="top-nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed top-4 left-0 right-0 z-50 mx-auto flex h-[62px] w-[calc(100%-40px)] max-w-[1080px] items-center justify-between rounded-2xl border border-[#d6e8e0]/90 bg-[#eff8f4]/85 px-4 text-xs text-[#1d383d] shadow-[0_12px_35px_rgba(25,75,65,0.12)] backdrop-blur-xl max-[560px]:top-3 max-[560px]:w-[calc(100%-24px)]"
        >
          <div className="flex items-center gap-2 rounded-full border border-[#d2e9e1] bg-[#f7fbf8]/90 px-3.5 py-1.5 text-[#264a47] shadow-sm transition duration-200 hover:bg-white">
            <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-semibold">Available for Hiring</span>
          </div>

          <nav
            className="ml-6 flex items-center gap-6 text-[#526b71] max-[850px]:ml-2 max-[850px]:gap-3 max-[680px]:hidden"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[#0f766e] hover:font-semibold"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            className="group inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-4 py-2 font-bold !text-white shadow-md shadow-[#0f766e]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#0b625c]"
            href="#contact"
          >
            Hire Me{" "}
            <FaArrowUpRightFromSquare className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
