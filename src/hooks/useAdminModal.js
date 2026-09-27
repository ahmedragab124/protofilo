import { useState } from "react";

export function useAdminModal({
  saveProject,
  saveExperience,
  saveService,
  deleteProject,
  deleteExperience,
  deleteService,
  deleteMessage,
  loadAllData,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: "", type: "" });

  function showStatus(text, type = "success") {
    setStatusMsg({ text, type });
    setTimeout(() => setStatusMsg({ text: "", type: "" }), 3500);
  }

  function openFormModal(type, initialData = {}) {
    setModalType(type);
    if (type === "project") {
      setFormData({
        dbId: initialData.dbId || null,
        id: initialData.id || String(Date.now()),
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "Web App",
        image: initialData.image || "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        demoUrl: initialData.demoUrl || "",
        githubUrl: initialData.githubUrl || "",
        tags: Array.isArray(initialData.tags) ? initialData.tags.join(", ") : initialData.tags || "",
      });
    } else if (type === "experience") {
      setFormData({
        dbId: initialData.dbId || null,
        id: initialData.id || String(Date.now()),
        nodeLabel: initialData.nodeLabel || "",
        nodeSub: initialData.nodeSub || "",
        role: initialData.role || "",
        company: initialData.company || "",
        period: initialData.period || "",
        description: initialData.description || "",
        bullets: Array.isArray(initialData.bullets) ? initialData.bullets.join("\n") : initialData.bullets || "",
        skills: Array.isArray(initialData.skills) ? initialData.skills.join(", ") : initialData.skills || "",
      });
    } else if (type === "service") {
      setFormData({
        dbId: initialData.dbId || null,
        id: initialData.id || String(Date.now()),
        title: initialData.title || "",
        description: initialData.description || "",
        linkText: initialData.linkText || "Learn More",
        linkUrl: initialData.linkUrl || "#contact",
        iconName: initialData.iconName || "FaCode",
      });
    }
    setIsModalOpen(true);
  }

  async function handleSaveItem(e) {
    e.preventDefault();
    setIsSaving(true);
    try {
      if (modalType === "project") await saveProject(formData);
      else if (modalType === "experience") await saveExperience(formData);
      else if (modalType === "service") await saveService(formData);
      showStatus("Saved successfully!");
      setIsModalOpen(false);
      loadAllData();
    } catch (err) {
      showStatus(err.message || "Error saving data.", "error");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteItem(type, dbId) {
    if (!window.confirm("Delete item?")) return;
    try {
      if (type === "project") await deleteProject(dbId);
      else if (type === "experience") await deleteExperience(dbId);
      else if (type === "service") await deleteService(dbId);
      else if (type === "message") await deleteMessage(dbId);
      showStatus("Deleted.");
      loadAllData();
    } catch (err) {
      showStatus(err.message || "Failed.", "error");
    }
  }

  return {
    isModalOpen,
    setIsModalOpen,
    modalType,
    formData,
    setFormData,
    isSaving,
    statusMsg,
    showStatus,
    openFormModal,
    handleSaveItem,
    handleDeleteItem,
  };
}
