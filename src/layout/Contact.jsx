import { motion } from "framer-motion";
import ContactInfoCard from "../componant/contact/ContactInfoCard";
import ContactForm from "../componant/contact/ContactForm";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto my-20 sm:my-24 w-[calc(100%-24px)] sm:w-[calc(100%-44px)] max-w-[1080px] overflow-hidden rounded-3xl border border-teal-500/25 bg-gradient-to-br from-[#0a171a] via-[#0e2226] to-[#071316] p-6 sm:p-10 lg:p-12 text-white shadow-2xl shadow-black/30"
      id="contact"
    >
      {/* Background Decorative Ambient Circles */}
      <div className="hidden md:block pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#14b8a6]/15 blur-2xl" />
      <div className="hidden md:block pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0f766e]/20 blur-2xl" />

      <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 items-start">
        {/* Left Side: Header & Contact Info Cards */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-950/60 px-3.5 py-1 text-[10px] font-bold tracking-[.6px] text-teal-300 uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#2dd4bf] animate-ping" />
            GET IN TOUCH
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">
            Let&apos;s Build Something Extraordinary Together!
          </h2>
          <p className="mt-3.5 max-w-md text-xs sm:text-[13px] leading-relaxed text-teal-100/70">
            Have an exciting project, a job opportunity, or just want to connect? Reach out using the form or direct contact details below. I respond promptly!
          </p>

          <div className="mt-8">
            <ContactInfoCard />
          </div>
        </div>

        {/* Right Side: React Hook Form + Zod Validated Contact Form */}
        <ContactForm />
      </div>
    </motion.section>
  );
}

export default Contact;
