function ExperienceFormFields({ formData, setFormData }) {
  return (
    <>
      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Role Title</label>
        <input
          type="text"
          required
          value={formData.role || ""}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Company / Org</label>
        <input
          type="text"
          required
          value={formData.company || ""}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[11px] font-bold text-[#8ea9a4]">Orbit Node Label</label>
          <input
            type="text"
            required
            value={formData.nodeLabel || ""}
            onChange={(e) => setFormData({ ...formData, nodeLabel: e.target.value })}
            className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-[#8ea9a4]">Period</label>
          <input
            type="text"
            required
            value={formData.period || ""}
            onChange={(e) => setFormData({ ...formData, period: e.target.value })}
            placeholder="2024 – Present"
            className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Description</label>
        <textarea
          rows={2}
          required
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>
    </>
  );
}

export default ExperienceFormFields;
