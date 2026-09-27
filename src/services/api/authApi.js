import { supabase, isSupabaseConfigured } from "./supabaseConfig";

export async function loginAdmin(email, password) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      "Supabase environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY) are missing or incomplete."
    );
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function logoutAdmin() {
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured || !supabase) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
