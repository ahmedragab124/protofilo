import { motion } from "framer-motion";

function HeroPortrait() {
  return (
    <motion.div
      className="flex justify-center max-[1040px]:col-span-2 max-[1040px]:row-start-1 max-[680px]:col-span-1 max-[680px]:row-start-1 [perspective:1000px] transform-gpu"
      aria-label="Ahmed Ragab portrait"
      initial={{
        opacity: 0,
        scale: 0.25,
        rotate: -720,
        rotateY: -360,
        y: 30,
      }}
      animate={{ opacity: 1, scale: 1, rotate: 0, rotateY: 0, y: 0 }}
      transition={{
        duration: 1.25,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
      style={{
        willChange: "transform, opacity",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      <motion.div
        className="portrait-card cursor-pointer transform-gpu"
        whileHover={{ scale: 1.06, rotateY: 15, rotateX: -8, rotateZ: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/WhatsApp_Image_2026-09-25_at_7.13.50_PM-removebg-preview.png"
          alt="Ahmed Ragab"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroPortrait;
