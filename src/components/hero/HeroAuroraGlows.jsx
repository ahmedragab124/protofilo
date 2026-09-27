function HeroAuroraGlows() {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#0f766e]/35 via-[#14b8a6]/25 to-transparent blur-3xl animate-aurora-1" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[560px] w-[560px] rounded-full bg-gradient-to-tl from-[#20958a]/30 via-[#0d6e66]/20 to-transparent blur-3xl animate-aurora-2" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full bg-[#14b8a6]/20 blur-3xl animate-aurora-center" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="heroGridLarge" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0f766e" strokeWidth="1.2" />
            <circle cx="48" cy="48" r="2" fill="#0f766e" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGridLarge)" />
      </svg>
    </>
  );
}

export default HeroAuroraGlows;
