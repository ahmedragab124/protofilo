function ProjectFormFields({ formData, setFormData }) {
  return (
    <>
      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Project Title</label>
        <input
          type="text"
          required
          value={formData.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Category</label>
        <input
          type="text"
          required
          value={formData.category || ""}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Image URL</label>
        <input
          type="url"
          required
          value={formData.image || ""}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[11px] font-bold text-[#8ea9a4]">Demo URL</label>
          <input
            type="url"
            value={formData.demoUrl || ""}
            onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
            className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
          />
        </div>
        <div>
          <label className="text-[11px] font-bold text-[#8ea9a4]">GitHub URL</label>
          <input
            type="url"
            value={formData.githubUrl || ""}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#8ea9a4]">Tags (comma separated)</label>
        <input
          type="text"
          value={formData.tags || ""}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          placeholder="React, Tailwind, Supabase"
          className="mt-1 w-full rounded-xl border border-[#183d42] bg-[#061215] px-3.5 py-2.5 text-xs text-white"
        />
      </div>
    </>
  );
}

export default ProjectFormFields;
