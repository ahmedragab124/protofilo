function ProjectPagination({ projects, activeIndex, onSelect }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {projects.map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            activeIndex === idx
              ? "w-8 bg-[#0f766e]"
              : "w-2 bg-[#d0e1dc] hover:bg-[#9acfc2]"
          }`}
        />
      ))}
    </div>
  );
}

export default ProjectPagination;
