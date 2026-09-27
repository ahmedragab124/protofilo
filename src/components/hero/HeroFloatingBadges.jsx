const floatingBadges = [
  { text: "<React.js 19 />", top: "8%", left: "4%" },
  { text: "C++ & OOP", top: "18%", right: "5%" },
  { text: "ICPC Mentor", bottom: "16%", left: "5%" },
  { text: "DEPI Graduate", bottom: "12%", right: "4%" },
];

function HeroFloatingBadges() {
  return (
    <div className="hidden sm:block pointer-events-none absolute inset-0 z-0">
      {floatingBadges.map((b) => (
        <div
          key={b.text}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
          }}
          className="absolute rounded-2xl border border-[#0f766e]/35 bg-white/85 px-4 py-2 font-mono text-xs font-bold text-[#0f766e] shadow-lg shadow-[#0f766e]/10 backdrop-blur-gpu animate-float-badge"
        >
          {b.text}
        </div>
      ))}
    </div>
  );
}

export default HeroFloatingBadges;
