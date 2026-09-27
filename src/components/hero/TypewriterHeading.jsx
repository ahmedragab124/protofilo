import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "AHMED RAGAB",
  "CS & AI STUDENT",
  "ICPC MENTOR",
  "FRONTEND DEVELOPER",
  "COMPETITIVE PROGRAMMER",
];

const TypewriterHeading = React.memo(function TypewriterHeading() {
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
});

export default TypewriterHeading;
