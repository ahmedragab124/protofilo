import { FaFolderOpen, FaBriefcase, FaGears, FaEnvelope } from "react-icons/fa6";

function AdminOverview({ projectsCount, experiencesCount, servicesCount, messagesCount }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-[#183d42] bg-[#0d2126] p-6">
        <div className="flex items-center justify-between text-[#76b9a8]">
          <span className="text-xs font-semibold uppercase tracking-wider">Projects</span>
          <FaFolderOpen className="text-lg" />
        </div>
        <p className="mt-3 font-mono text-3xl font-extrabold text-white">{projectsCount}</p>
        <p className="mt-1 text-[11px] text-[#527a75]">Published in Portfolio</p>
      </div>

      <div className="rounded-2xl border border-[#183d42] bg-[#0d2126] p-6">
        <div className="flex items-center justify-between text-[#76b9a8]">
          <span className="text-xs font-semibold uppercase tracking-wider">Experience</span>
          <FaBriefcase className="text-lg" />
        </div>
        <p className="mt-3 font-mono text-3xl font-extrabold text-white">{experiencesCount}</p>
        <p className="mt-1 text-[11px] text-[#527a75]">Timeline Stations</p>
      </div>

      <div className="rounded-2xl border border-[#183d42] bg-[#0d2126] p-6">
        <div className="flex items-center justify-between text-[#76b9a8]">
          <span className="text-xs font-semibold uppercase tracking-wider">Services</span>
          <FaGears className="text-lg" />
        </div>
        <p className="mt-3 font-mono text-3xl font-extrabold text-white">{servicesCount}</p>
        <p className="mt-1 text-[11px] text-[#527a75]">Offered Solutions</p>
      </div>

      <div className="rounded-2xl border border-teal-500/30 bg-teal-950/30 p-6">
        <div className="flex items-center justify-between text-teal-300">
          <span className="text-xs font-semibold uppercase tracking-wider">Inbox Messages</span>
          <FaEnvelope className="text-lg" />
        </div>
        <p className="mt-3 font-mono text-3xl font-extrabold text-teal-200">{messagesCount}</p>
        <p className="mt-1 text-[11px] text-teal-400/70">Submissions from Contact Form</p>
      </div>
    </div>
  );
}

export default AdminOverview;
