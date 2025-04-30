import { ref } from "vue";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export function useJobs() {
  const jobs = ref([]);
  const loadingJobs = ref(true);

  async function fetchJobs() {
    try {
      loadingJobs.value = true;

      const q = query(collection(db, "jobs"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);

      jobs.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      loadingJobs.value = false;
    }
  }

  return {
    jobs,
    loadingJobs,
    fetchJobs,
  };
}
