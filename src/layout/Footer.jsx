import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  const socials = [
    { label: "GitHub", href: "https://github.com/ahmedragab124", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-ragab-9a6680284", icon: FaLinkedinIn },
    { label: "Instagram", href: "https://www.instagram.com/_abo__ragab/", icon: FaInstagram },
  ];

  return (
    <footer className="mx-auto flex w-[calc(100%-56px)] max-w-[1080px] items-center justify-between border-t border-[#d8e6e1] py-7 text-xs text-[#6c817f] max-[850px]:w-[calc(100%-32px)] max-[560px]:flex-col max-[560px]:gap-3">
      <span>© 2026 Ahmed Ragab • All Rights Reserved</span>
      
      <div className="flex items-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d5eae4] bg-white text-[#0f766e] transition-all hover:scale-110 hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white"
          >
            <Icon className="text-xs" />
          </a>
        ))}
      </div>

      <span>Designed &amp; Built with React &amp; Tailwind</span>
    </footer>
  );
}

export default Footer;
