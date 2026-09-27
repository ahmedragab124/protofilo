function ContactFormFields({ register, errors }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
    </>
  );
}

export default ContactFormFields;
