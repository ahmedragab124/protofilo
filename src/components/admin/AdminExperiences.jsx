import { FaPlus, FaTrash, FaPenToSquare } from "react-icons/fa6";

function AdminExperiences({ experiences, onOpenModal, onDelete }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white">Manage Experience Timeline</h2>
          <p className="text-xs text-[#769a93]">Manage stations in the career orbit timeline.</p>
        </div>
        <button
          onClick={() => onOpenModal("experience")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0f766e] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#0b625c]"
        >
          <FaPlus /> Add Experience Station
        </button>
      </div>

      <div className="grid gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.dbId || exp.id}
            className="flex items-start justify-between rounded-2xl border border-[#183d42] bg-[#0d2126] p-5"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f766e] font-mono text-xs font-bold text-white">
                  {exp.id}
                </span>
                <h3 className="text-base font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-semibold text-[#76b9a8]">@ {exp.company}</span>
              </div>
              <p className="mt-2 text-xs text-[#8ea9a4]">{exp.description}</p>
              <p className="mt-1 text-[11px] font-mono text-[#527a75]">{exp.period}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenModal("experience", exp)}
                className="p-2 text-teal-300 hover:text-white transition"
              >
                <FaPenToSquare className="text-sm" />
              </button>
              <button
                onClick={() => onDelete("experience", exp.dbId)}
                className="p-2 text-rose-400 hover:text-rose-200 transition"
              >
                <FaTrash className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminExperiences;
