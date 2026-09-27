import { FaPlus, FaTrash, FaPenToSquare, FaGlobe, FaCodeBranch } from "react-icons/fa6";

function AdminProjects({ projects, onOpenModal, onDelete }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white">Manage Projects</h2>
          <p className="text-xs text-[#769a93]">Add, edit, or delete featured portfolio projects.</p>
        </div>
        <button
          onClick={() => onOpenModal("project")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0f766e] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#0b625c]"
        >
          <FaPlus /> Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.dbId || proj.id}
            className="flex flex-col justify-between rounded-2xl border border-[#183d42] bg-[#0d2126] p-5 shadow-md"
          >
            <div>
              <div className="h-36 w-full overflow-hidden rounded-xl bg-[#061215] mb-4">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="rounded-full bg-[#14b8a6]/15 border border-[#14b8a6]/30 px-2.5 py-0.5 text-[9.5px] font-bold text-[#2dd4bf]">
                {proj.category}
              </span>
              <h3 className="mt-2 text-base font-bold text-white">{proj.title}</h3>
              <p className="mt-1 text-xs text-[#8ea9a4] line-clamp-2">{proj.description}</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#183d42] pt-3">
              <div className="flex gap-2 text-xs text-[#769a93]">
                {proj.demoUrl && (
                  <a href={proj.demoUrl} target="_blank" rel="noreferrer" title="Demo">
                    <FaGlobe className="hover:text-white" />
                  </a>
                )}
                {proj.githubUrl && (
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" title="Source">
                    <FaCodeBranch className="hover:text-white" />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenModal("project", proj)}
                  className="p-1.5 text-teal-300 hover:text-white transition"
                  title="Edit"
                >
                  <FaPenToSquare className="text-xs" />
                </button>
                <button
                  onClick={() => onDelete("project", proj.dbId)}
                  className="p-1.5 text-rose-400 hover:text-rose-200 transition"
                  title="Delete"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProjects;
