import { FaTrash } from "react-icons/fa6";

function AdminMessages({ messages, onRefresh, onDelete }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-white">Contact Form Messages</h2>
          <p className="text-xs text-[#769a93]">Inquiries submitted by portfolio visitors.</p>
        </div>
        <button
          onClick={onRefresh}
          className="rounded-xl border border-[#183d42] bg-[#0d2126] px-3.5 py-2 text-xs font-semibold text-[#76b9a8] hover:text-white transition"
        >
          Refresh Inbox
        </button>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-2xl border border-[#183d42] bg-[#0d2126] p-12 text-center text-xs text-[#769a93]">
          No contact form submissions yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-2xl border border-teal-500/30 bg-[#0d2126] p-5 shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">{msg.name}</h3>
                  <p className="text-xs font-semibold text-[#2dd4bf]">{msg.email}</p>
                  {msg.phone && <p className="text-[11px] text-[#769a93]">Phone / Subject: {msg.phone}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#527a75]">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                  <button
                    onClick={() => onDelete("message", msg.id)}
                    className="p-1.5 text-rose-400 hover:text-rose-200 transition"
                    title="Delete Message"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#183d42] bg-[#061215] p-4 text-xs leading-relaxed text-[#e7f4f0]">
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminMessages;
