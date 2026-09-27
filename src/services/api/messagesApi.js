import { supabase, isSupabaseConfigured } from "./supabaseConfig";

export async function sendContactMessage(formData) {
  if (!isSupabaseConfigured || !supabase) {
    console.log("Mock contact submission:", formData);
    return { success: true, mock: true };
  }

  const { data, error } = await supabase
    .from("messages")
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        message: formData.message,
      },
    ])
    .select();

  if (error) throw error;
  return { success: true, data };
}

export async function getMessages() {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function deleteMessage(dbId) {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from("messages").delete().eq("id", dbId);
  if (error) throw error;
}
