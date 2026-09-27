import { FaEnvelope, FaLocationDot, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const contactItems = [
  {
    id: "email",
    label: "Email",
    value: "ahmedfgytubfs@gmail.com",
    href: "mailto:ahmedfgytubfs@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: "phone",
    label: "Call / WhatsApp",
    value: "01010076017",
    href: "https://wa.me/201010076017",
    icon: FaPhone,
  },
  {
    id: "location",
    label: "Location",
    value: "Qena, Egypt",
    href: "#",
    icon: FaLocationDot,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ahmedragab124", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-ragab-9a6680284", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/_abo__ragab/", icon: FaInstagram },
];

function ContactInfoCard() {
  return (
    <div className="flex flex-col gap-4">
      {contactItems.map(({ id, label, value, href, icon: Icon }) => (
        <a
          key={id}
          href={href}
          target={href.startsWith("http") ? "_blank" : "_self"}
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-teal-500/20 bg-[#112226]/80 p-4.5 transition-all duration-300 hover:border-teal-400/50 hover:bg-[#152a2f] hover:shadow-[0_12px_28px_rgba(20,184,166,0.15)]"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal-500/30 bg-teal-950/60 text-teal-300 transition-colors group-hover:bg-[#0f766e] group-hover:text-white group-hover:border-[#0f766e]">
            <Icon className="text-base" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-teal-400/80">
              {label}
            </span>
            <span className="text-xs sm:text-sm font-bold text-teal-100 transition-colors group-hover:text-teal-300">
              {value}
            </span>
          </div>
        </a>
      ))}

      {/* Social Media Links Row */}
      <div className="mt-2 pt-4 border-t border-teal-500/20">
        <p className="text-[11px] font-bold tracking-wider text-teal-400/80 uppercase mb-3">
          Social Profiles
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/30 bg-[#112226] text-teal-300 transition-all duration-300 hover:scale-110 hover:border-teal-400 hover:bg-[#0f766e] hover:text-white shadow-md shadow-black/20"
            >
              <Icon className="text-sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;
