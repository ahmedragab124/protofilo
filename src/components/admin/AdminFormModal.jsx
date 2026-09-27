import { motion } from "framer-motion";
import ProjectFormFields from "./modals/ProjectFormFields";
import ExperienceFormFields from "./modals/ExperienceFormFields";
import ServiceFormFields from "./modals/ServiceFormFields";

function AdminFormModal({
  isOpen,
  modalType,
  formData,
  setFormData,
  isSaving,
  onClose,
  onSave,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#14b8a6]/30 bg-[#0d2126] p-6 shadow-2xl text-[#e7f4f0]"
      >
        <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
          {formData.dbId ? "Edit" : "Create New"} {modalType}
        </h2>

        <form onSubmit={onSave} className="flex flex-col gap-4">
          {modalType === "project" && (
            <ProjectFormFields formData={formData} setFormData={setFormData} />
          )}

          {modalType === "experience" && (
            <ExperienceFormFields formData={formData} setFormData={setFormData} />
          )}

          {modalType === "service" && (
            <ServiceFormFields formData={formData} setFormData={setFormData} />
          )}

          <div className="mt-4 flex items-center justify-end gap-3 pt-3 border-t border-[#183d42]">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#183d42] px-4 py-2 text-xs font-semibold text-[#769a93] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-xl bg-[#0f766e] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#0b625c]"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminFormModal;
