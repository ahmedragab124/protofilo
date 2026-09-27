import {
  FaCloudArrowUp,
  FaFolderOpen,
  FaBriefcase,
  FaGears,
  FaEnvelope,
} from "react-icons/fa6";

function AdminTabsNav({ activeTab, setActiveTab, counts }) {
  const tabs = [
    { id: "overview", label: "Overview Stats", icon: FaCloudArrowUp },
    { id: "projects", label: `Projects (${counts.projects})`, icon: FaFolderOpen },
    { id: "experiences", label: `Experience (${counts.experiences})`, icon: FaBriefcase },
    { id: "services", label: `Services (${counts.services})`, icon: FaGears },
    { id: "messages", label: `Inbox Messages (${counts.messages})`, icon: FaEnvelope },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-2 border-b border-[#143036] pb-4">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === id
              ? "bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white shadow-md shadow-[#0f766e]/20"
              : "border border-[#183d42] bg-[#0d2126] text-[#769a93] hover:border-[#20958a] hover:text-white"
          }`}
        >
          <Icon className="text-xs" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default AdminTabsNav;
