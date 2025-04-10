import { supabase } from "@/plugins/supabase";

export function useJobs() {
  const jobs = ref([]);
  const loadingJobs = ref(true);

  async function fetchJobs() {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("order", { ascending: true });

    if (error) {
      console.error("Error fetching jobs:", error);
      return;
    }

    jobs.value = data;
  }
  return {
    jobs,
    loadingJobs,
    fetchJobs,
  };
}
