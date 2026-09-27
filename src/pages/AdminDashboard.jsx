import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { isSupabaseConfigured } from "../lib/supabaseClient";
import { useAdminData } from "../hooks/useAdminData";
import { useAdminModal } from "../hooks/useAdminModal";

import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";
import AdminTabsNav from "../components/admin/AdminTabsNav";
import AdminOverview from "../components/admin/AdminOverview";
import AdminProjects from "../components/admin/AdminProjects";
import AdminExperiences from "../components/admin/AdminExperiences";
import AdminServices from "../components/admin/AdminServices";
import AdminMessages from "../components/admin/AdminMessages";
import AdminFormModal from "../components/admin/AdminFormModal";

function AdminDashboard() {
  const adminData = useAdminData();
  const {
    user,
    setUser,
    loadingUser,
    projects,
    experiences,
    services,
    messages,
    loadAllData,
    loginAdmin,
    logoutAdmin,
    saveProject,
    deleteProject,
    saveExperience,
    deleteExperience,
    saveService,
    deleteService,
    deleteMessage,
  } = adminData;

  const modal = useAdminModal({
    saveProject,
    saveExperience,
    saveService,
    deleteProject,
    deleteExperience,
    deleteService,
    deleteMessage,
    loadAllData,
  });

  const [activeTab, setActiveTab] = useState("overview");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setAuthError("");
    setIsSubmittingAuth(true);
    try {
      await loginAdmin(email, password);
      modal.showStatus("Logged in successfully!", "success");
    } catch (err) {
      setAuthError(err.message || "Failed to authenticate.");
    } finally {
      setIsSubmittingAuth(false);
    }
  }

  if (loadingUser) {
    return <div className="min-h-screen bg-[#071316] text-[#e7f4f0] flex items-center justify-center font-bold">Loading...</div>;
  }

  if (isSupabaseConfigured && !user) {
    return (
      <AdminLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        authError={authError}
        isSubmittingAuth={isSubmittingAuth}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#061215] text-[#e7f4f0]">
      <AdminHeader user={user} isSupabaseConfigured={isSupabaseConfigured} onLogout={async () => { await logoutAdmin(); setUser(null); }} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <AnimatePresence>
          {modal.statusMsg.text && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-6 rounded-xl border border-teal-500/40 bg-teal-950/80 p-4 text-xs font-bold text-teal-200">
              <FaCheck className="inline mr-2" />{modal.statusMsg.text}
            </motion.div>
          )}
        </AnimatePresence>
        <AdminTabsNav activeTab={activeTab} setActiveTab={setActiveTab} counts={{ projects: projects.length, experiences: experiences.length, services: services.length, messages: messages.length }} />
        {activeTab === "overview" && <AdminOverview projectsCount={projects.length} experiencesCount={experiences.length} servicesCount={services.length} messagesCount={messages.length} />}
        {activeTab === "projects" && <AdminProjects projects={projects} onOpenModal={modal.openFormModal} onDelete={modal.handleDeleteItem} />}
        {activeTab === "experiences" && <AdminExperiences experiences={experiences} onOpenModal={modal.openFormModal} onDelete={modal.handleDeleteItem} />}
        {activeTab === "services" && <AdminServices services={services} onOpenModal={modal.openFormModal} onDelete={modal.handleDeleteItem} />}
        {activeTab === "messages" && <AdminMessages messages={messages} onRefresh={loadAllData} onDelete={modal.handleDeleteItem} />}
      </div>
      <AdminFormModal isOpen={modal.isModalOpen} modalType={modal.modalType} formData={modal.formData} setFormData={modal.setFormData} isSaving={modal.isSaving} onClose={() => modal.setIsModalOpen(false)} onSave={modal.handleSaveItem} />
    </div>
  );
}

export default AdminDashboard;
