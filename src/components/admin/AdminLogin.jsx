import { motion } from "framer-motion";
import { FaLock, FaArrowLeft, FaCircleExclamation } from "react-icons/fa6";

function AdminLogin({
  email,
  setEmail,
  password,
  setPassword,
  authError,
  isSubmittingAuth,
  onLogin,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071417] px-4 py-12 text-[#e7f4f0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-3xl border border-[#14b8a6]/30 bg-[#0d2126]/95 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#14b8a6]/40 bg-[#0f766e]/30 text-[#2dd4bf] shadow-lg mb-4">
            <FaLock className="text-xl" />
          </div>
          <h1 className="text-2xl font-black text-white">Portfolio Admin Portal</h1>
          <p className="mt-1 text-xs text-[#8ea9a4]">
            Sign in with your Supabase Admin credentials to manage content and inbox.
          </p>
        </div>

        {authError && (
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/50 p-3 text-xs text-rose-300">
            <FaCircleExclamation className="shrink-0 text-sm" />
            <span>{authError}</span>
          </div>
        )}

        <form onSubmit={onLogin} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-[11px] font-bold tracking-wider text-[#8ea9a4] uppercase">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-xl border border-[#183d42] bg-[#071417] px-4 py-3 text-xs text-white placeholder-[#527a75] outline-none focus:border-[#20958a] focus:ring-1 focus:ring-[#20958a]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-[11px] font-bold tracking-wider text-[#8ea9a4] uppercase">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full rounded-xl border border-[#183d42] bg-[#071417] px-4 py-3 text-xs text-white placeholder-[#527a75] outline-none focus:border-[#20958a] focus:ring-1 focus:ring-[#20958a]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmittingAuth}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#14b8a6] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-[#0f766e]/30 transition hover:brightness-110 active:scale-98 disabled:opacity-50"
          >
            {isSubmittingAuth ? "Authenticating..." : "Sign In to Admin Panel"}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#183d42]/60 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#76b9a8] hover:text-white transition"
          >
            <FaArrowLeft className="text-[10px]" /> Back to Public Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminLogin;
