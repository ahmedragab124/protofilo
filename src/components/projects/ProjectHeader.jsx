import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function ProjectHeader({ activeIndex, totalProjects, onPrev, onNext }) {
  return (
    <div className="mb-10 flex items-end justify-between max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-4">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d2e9e1] bg-[#edf7f3] px-3.5 py-1 text-[10px] font-semibold tracking-[.6px] text-[#0f766e] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3d9972] animate-pulse" />
          MY PORTFOLIO
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#19333a] sm:text-4xl">
          Featured Works &amp; Projects
        </h2>
        <p className="mt-2 max-w-xl text-xs text-[#526b71]">
          A dynamic curation of real-world frontend applications, production
          platforms, and high-performance user interfaces.
        </p>
      </div>

      {/* Counter & Controls */}
      <div className="flex items-center gap-4 self-end max-[680px]:self-start">
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#d2e9e1] bg-white text-[#2c4a4d] shadow-sm transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e] active:scale-95"
          >
            <FaArrowLeft className="text-xs" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next project"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#d2e9e1] bg-white text-[#2c4a4d] shadow-sm transition hover:border-[#0f766e] hover:bg-[#edf7f3] hover:text-[#0f766e] active:scale-95"
          >
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
