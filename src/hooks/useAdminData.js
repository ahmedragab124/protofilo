import { useState, useEffect } from "react";
import {
  isSupabaseConfigured,
  supabase,
  getProjects,
  saveProject,
  deleteProject,
  getExperiences,
  saveExperience,
  deleteExperience,
  getServices,
  saveService,
  deleteService,
  getMessages,
  deleteMessage,
  loginAdmin,
  logoutAdmin,
  getCurrentUser,
} from "../lib/supabaseClient";

export function useAdminData() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [services, setServices] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function checkAuth() {
      if (isSupabaseConfigured && supabase) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user || null);
        });

        setLoadingUser(false);
        return () => subscription.unsubscribe();
      } else {
        setLoadingUser(false);
      }
    }
    checkAuth();
  }, []);

  useEffect(() => {
    if (user || !isSupabaseConfigured) {
      loadAllData();
    }
  }, [user]);

  async function loadAllData() {
    try {
      const [projData, expData, servData, msgData] = await Promise.all([
        getProjects(),
        getExperiences(),
        getServices(),
        getMessages(),
      ]);
      setProjects(projData || []);
      setExperiences(expData || []);
      setServices(servData || []);
      setMessages(msgData || []);
    } catch (err) {
      console.error("Error loading admin data:", err);
    }
  }

  return {
    user,
    setUser,
    loadingUser,
    projects,
    experiences,
    services,
    messages,
    loadAllData,
    loginAdmin,
    logoutAdmin,
    saveProject,
    deleteProject,
    saveExperience,
    deleteExperience,
    saveService,
    deleteService,
    deleteMessage,
  };
}
