import { supabase } from "@/plugins/supabase";

export function useProjects() {
  const projects = ref([]);
  const loading = ref(true);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching projects:", error);
      return;
    }

    projects.value = data;
  }
  return {
    projects,
    loading,
    fetchProjects,
  };
}
