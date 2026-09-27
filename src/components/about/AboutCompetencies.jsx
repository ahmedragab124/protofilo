import { FaCheck } from "react-icons/fa6";

const points = [
  "DEPI React Frontend Track Graduate",
  "Computer Science & AI Undergrad (SVNU 2nd Year)",
  "ICPC SVNU Community Mentor & Algorithm Coach",
  "C++ Data Structures & Problem Solving Expert",
];

function AboutCompetencies() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {points.map((point) => (
        <div
          className="flex items-center gap-2.5 text-xs font-semibold text-[#2c4a4d]"
          key={point}
        >
          <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full border border-[#d0e8e1] bg-[#edf7f3] text-[9px] text-[#0f766e]">
            <FaCheck />
          </span>
          <span>{point}</span>
        </div>
      ))}
    </div>
  );
}

export default AboutCompetencies;
