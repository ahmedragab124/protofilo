import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCircleCheck, FaSpinner } from "react-icons/fa6";
import { contactSchema } from "./contactSchema";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      console.log("Form Submitted Successfully:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();

      // Auto dismiss success toast after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <div className="relative rounded-3xl border border-[#dce9e4] bg-[#f8faf9] p-6 sm:p-9 shadow-lg shadow-slate-400/5">
      {/* Success Notification Alert */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="mb-6 flex items-center gap-3 rounded-2xl border border-[#9acfc2] bg-[#edf7f3] p-4 text-xs font-semibold text-[#0f766e] shadow-sm"
          >
            <FaCircleCheck className="text-lg shrink-0 text-[#20958a]" />
            <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#19333a]" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. John Doe"
              {...register("name")}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-xs text-[#19333a] outline-none transition placeholder:text-[#a0b5b2] focus:ring-2 ${
                errors.name
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-[#dce9e4] focus:border-[#0f766e] focus:ring-[#0f766e]/20"
              }`}
            />
            {errors.name && (
              <span className="text-[11px] font-medium text-rose-500">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-[#19333a]" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. john@example.com"
              {...register("email")}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-xs text-[#19333a] outline-none transition placeholder:text-[#a0b5b2] focus:ring-2 ${
                errors.email
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-[#dce9e4] focus:border-[#0f766e] focus:ring-[#0f766e]/20"
              }`}
            />
            {errors.email && (
              <span className="text-[11px] font-medium text-rose-500">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-[#19333a]" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project Inquiry / Feedback"
            {...register("subject")}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-xs text-[#19333a] outline-none transition placeholder:text-[#a0b5b2] focus:ring-2 ${
              errors.subject
                ? "border-rose-400 focus:ring-rose-200"
                : "border-[#dce9e4] focus:border-[#0f766e] focus:ring-[#0f766e]/20"
            }`}
          />
          {errors.subject && (
            <span className="text-[11px] font-medium text-rose-500">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-[#19333a]" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project, timeline, and goals..."
            {...register("message")}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-xs text-[#19333a] outline-none transition placeholder:text-[#a0b5b2] focus:ring-2 resize-none ${
              errors.message
                ? "border-rose-400 focus:ring-rose-200"
                : "border-[#dce9e4] focus:border-[#0f766e] focus:ring-[#0f766e]/20"
            }`}
          />
          {errors.message && (
            <span className="text-[11px] font-medium text-rose-500">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-[#0f766e]/20 transition hover:-translate-y-0.5 hover:bg-[#0b625c] active:scale-95 disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin text-sm" /> Sending...
            </>
          ) : (
            <>
              Send Message <FaPaperPlane className="text-xs" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
