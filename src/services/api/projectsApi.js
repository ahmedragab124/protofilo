import { supabase, isSupabaseConfigured } from "./supabaseConfig";
import { projectsData } from "../../data/projectData";

export async function getProjects() {
  if (!isSupabaseConfigured || !supabase) {
    return projectsData;
  }
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error || !data || data.length === 0) {
      console.warn("Using fallback local projectsData:", error?.message);
      return projectsData;
    }

    // Sort if order_index exists, otherwise fallback to id or array order
    data.sort((a, b) => (a.order_index ?? a.id ?? 0) - (b.order_index ?? b.id ?? 0));

    // Map local projectData by ID ("01", "1", etc.) for fallbacks
    const localMap = {};
    projectsData.forEach((p) => {
      localMap[String(p.id)] = p;
      localMap[String(parseInt(p.id, 10))] = p;
      localMap[String(p.id).padStart(2, "0")] = p;
    });

    return data.map((item, index) => {
      const rawId = item.project_id || item.id || (index + 1);
      const local =
        localMap[String(rawId)] ||
        localMap[String(index + 1)] ||
        localMap[String(index + 1).padStart(2, "0")] ||
        projectsData[index] ||
        {};

      let parsedTags = [];
      if (Array.isArray(item.tags) && item.tags.length > 0) {
        parsedTags = item.tags;
      } else if (typeof item.tags === "string" && item.tags.trim()) {
        parsedTags = item.tags.split(",").map((t) => t.trim()).filter(Boolean);
      }
      
      if (parsedTags.length === 0 && Array.isArray(local.tags)) {
        parsedTags = local.tags;
      }

      return {
        id: String(item.project_id || local.id || (index + 1)).padStart(2, "0"),
        dbId: item.id,
        title: item.title || local.title || "Untitled Project",
        description: item.description || local.description || "",
        category: item.category || local.category || "PORTFOLIO",
        image: (item.image && item.image.trim()) ? item.image : (local.image || "/jawla-cover.png"),
        demoUrl: item.demo_url || item.demoUrl || local.demoUrl || "#",
        githubUrl: item.github_url || item.githubUrl || local.githubUrl || "#",
        tags: parsedTags.length > 0 ? parsedTags : ["React", "JavaScript"],
        featured: item.featured ?? local.featured ?? false,
      };
    });
  } catch (err) {
    console.error("Error fetching projects from Supabase:", err);
    return projectsData;
  }
}

export async function saveProject(project) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    project_id: String(project.id || Date.now()),
    title: project.title,
    description: project.description,
    category: project.category,
    image: project.image,
    demo_url: project.demoUrl,
    github_url: project.githubUrl,
    tags: Array.isArray(project.tags)
      ? project.tags
      : project.tags.split(",").map((t) => t.trim()),
  };

  if (project.dbId) {
    const { data, error } = await supabase
      .from("projects")
      .update(payload)
      .eq("id", project.dbId)
      .select();
    if (error) throw error;
    return data;
  } else {
    const { data, error } = await supabase
      .from("projects")
      .insert([payload])
      .select();
    if (error) throw error;
    return data;
  }
}

export async function deleteProject(dbId) {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from("projects").delete().eq("id", dbId);
  if (error) throw error;
}
