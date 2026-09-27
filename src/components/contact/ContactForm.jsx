import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCircleCheck, FaSpinner } from "react-icons/fa6";
import { contactSchema } from "./contactSchema";
import { sendContactMessage } from "../../lib/supabaseClient";
import ContactFormFields from "./ContactFormFields";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await sendContactMessage({
        name: data.name,
        email: data.email,
        phone: data.subject || "",
        message: data.message,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Failed to send contact message:", err);
      setIsSubmitting(false);
      setErrorMessage("Could not send message. Please try again or email directly.");
    }
  };

  return (
    <div className="relative rounded-3xl border border-[#dce9e4] bg-[#f8faf9] p-6 sm:p-9 shadow-lg shadow-slate-400/5">
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

      {errorMessage && (
        <div className="mb-4 text-xs font-medium text-rose-500">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <ContactFormFields register={register} errors={errors} />

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
