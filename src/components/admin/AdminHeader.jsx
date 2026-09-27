import { FaArrowLeft, FaGlobe, FaRightFromBracket } from "react-icons/fa6";

function AdminHeader({ user, isSupabaseConfigured, onLogout }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#143036] bg-[#08181c]/90 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#14b8a6]/30 bg-[#0f766e]/20 text-[#2dd4bf] hover:bg-[#0f766e]/40 transition"
            title="Return to Portfolio"
          >
            <FaArrowLeft className="text-xs" />
          </a>
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              Portfolio Control Center
              <span className="rounded-full bg-[#14b8a6]/20 px-2 py-0.5 text-[9.5px] font-mono text-[#2dd4bf] border border-[#14b8a6]/30">
                ADMIN
              </span>
            </h1>
            <p className="text-[11px] text-[#769a93]">
              {isSupabaseConfigured
                ? `Connected: ${user?.email || "Admin Session"}`
                : "Running in Local Data Demo Mode (No Supabase Env)"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#183d42] bg-[#0d2126] px-3.5 py-1.5 text-xs text-[#76b9a8] hover:text-white transition"
          >
            <FaGlobe className="text-xs" /> Live View
          </a>
          {user && (
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3.5 py-1.5 text-xs font-semibold text-rose-300 hover:bg-rose-900/60 transition"
            >
              <FaRightFromBracket className="text-xs" /> Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
