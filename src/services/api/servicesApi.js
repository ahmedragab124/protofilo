import { supabase, isSupabaseConfigured } from "./supabaseConfig";
import { servicesData } from "../../data/servicesData";

export async function getServices() {
  if (!isSupabaseConfigured || !supabase) {
    return servicesData;
  }
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("order_index", { ascending: true });

    if (error || !data || data.length === 0) {
      return servicesData;
    }

    return data.map((item) => ({
      id: item.service_id || item.id,
      dbId: item.id,
      title: item.title,
      description: item.description,
      linkText: item.link_text,
      linkUrl: item.link_url,
      iconName: item.icon_name,
    }));
  } catch (err) {
    console.error("Error fetching services:", err);
    return servicesData;
  }
}

export async function saveService(service) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    service_id: String(service.id || Date.now()),
    title: service.title,
    description: service.description,
    link_text: service.linkText || "Learn More",
    link_url: service.linkUrl || "#contact",
    icon_name: service.iconName || "FaCode",
  };

  if (service.dbId) {
    const { data, error } = await supabase
      .from("services")
      .update(payload)
      .eq("id", service.dbId)
      .select();
    if (error) throw error;
    return data;
  } else {
    const { data, error } = await supabase
      .from("services")
      .insert([payload])
      .select();
    if (error) throw error;
    return data;
  }
}

export async function deleteService(dbId) {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from("services").delete().eq("id", dbId);
  if (error) throw error;
}
