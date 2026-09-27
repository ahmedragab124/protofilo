function ServiceFormFields({ formData, setFormData }) {
  return (
    <>
      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Service Title</label>
        <input
          type="text"
          required
          value={formData.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Description</label>
        <textarea
          rows={3}
          required
          value={formData.description || ""}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>
    </>
  );
}

export default ServiceFormFields;
