import { motion } from "framer-motion";
import ServiceCard from "../componant/services/ServiceCard";
import { servicesData } from "../componant/services/servicesData";

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto my-24 w-[calc(100%-32px)] sm:w-[calc(100%-44px)] max-w-[1080px] overflow-hidden rounded-3xl border border-[#183d42] bg-gradient-to-b from-[#0b1e21] via-[#0d2529] to-[#0b1e21] px-6 py-12 sm:px-10 sm:py-16 text-[#e7f4f0] shadow-2xl"
      id="services"
    >
      {/* Background Glow Blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0f766e]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#20958a]/15 blur-3xl" />

      {/* Header Section */}
      <div className="relative z-10 mb-12">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#20958a]/40 bg-[#0f766e]/25 px-3.5 py-1 text-[10px] font-semibold tracking-[.6px] text-[#76b9a8] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#20958a] animate-ping" />
          WHAT I DO
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e7f4f0] to-[#76b9a8] sm:text-4xl">
          Services &amp; Expertise
        </h2>
        <p className="mt-2.5 max-w-xl text-xs sm:text-[13px] leading-relaxed text-[#8ea9a4]">
          I help businesses and individuals bring their ideas to life through modern frontend technologies and clean, user-focused design.
        </p>
      </div>

      {/* 2x2 Services Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

export default Services;
