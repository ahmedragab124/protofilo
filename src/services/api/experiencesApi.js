import { supabase, isSupabaseConfigured } from "./supabaseConfig";
import { experienceData } from "../../data/experienceData";

export async function getExperiences() {
  if (!isSupabaseConfigured || !supabase) {
    return experienceData;
  }
  try {
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("order_index", { ascending: true });

    if (error || !data || data.length === 0) {
      return experienceData;
    }

    return data.map((item) => ({
      id: item.node_id || item.id,
      dbId: item.id,
      nodeLabel: item.node_label,
      nodeSub: item.node_sub,
      role: item.role,
      company: item.company,
      location: item.location || "",
      period: item.period,
      summary: item.description || item.summary || "",
      description: item.description,
      companyIcon: item.icon_name || "FaBriefcase", // string key → ICON_MAP in ExperienceDetailCard
      bullets: item.bullets || [],
      skills: item.skills || [],
    }));
  } catch (err) {
    console.error("Error fetching experiences:", err);
    return experienceData;
  }
}

export async function saveExperience(exp) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    node_id: String(exp.id || Date.now()),
    node_label: exp.nodeLabel,
    node_sub: exp.nodeSub,
    role: exp.role,
    company: exp.company,
    period: exp.period,
    description: exp.description,
    bullets: Array.isArray(exp.bullets)
      ? exp.bullets
      : exp.bullets.split("\n").filter(Boolean),
    skills: Array.isArray(exp.skills)
      ? exp.skills
      : exp.skills.split(",").map((s) => s.trim()),
  };

  if (exp.dbId) {
    const { data, error } = await supabase
      .from("experiences")
      .update(payload)
      .eq("id", exp.dbId)
      .select();
    if (error) throw error;
    return data;
  } else {
    const { data, error } = await supabase
      .from("experiences")
      .insert([payload])
      .select();
    if (error) throw error;
    return data;
  }
}

export async function deleteExperience(dbId) {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from("experiences").delete().eq("id", dbId);
  if (error) throw error;
}
