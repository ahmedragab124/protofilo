import { FaPlus, FaTrash, FaPenToSquare } from "react-icons/fa6";

function AdminServices({ services, onOpenModal, onDelete }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white">Manage Services</h2>
          <p className="text-xs text-[#769a93]">Configure services offered on the portfolio.</p>
        </div>
        <button
          onClick={() => onOpenModal("service")}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0f766e] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#0b625c]"
        >
          <FaPlus /> Add Service Item
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((serv) => (
          <div
            key={serv.dbId || serv.id}
            className="flex flex-col justify-between rounded-2xl border border-[#183d42] bg-[#0d2126] p-5"
          >
            <div>
              <span className="font-mono text-xs font-bold text-[#2dd4bf]">#{serv.id}</span>
              <h3 className="mt-1 text-base font-bold text-white">{serv.title}</h3>
              <p className="mt-2 text-xs text-[#8ea9a4]">{serv.description}</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#183d42] pt-3">
              <span className="text-[11px] text-[#527a75]">{serv.linkText}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenModal("service", serv)}
                  className="p-1.5 text-teal-300 hover:text-white transition"
                >
                  <FaPenToSquare className="text-xs" />
                </button>
                <button
                  onClick={() => onDelete("service", serv.dbId)}
                  className="p-1.5 text-rose-400 hover:text-rose-200 transition"
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

export default AdminServices;
