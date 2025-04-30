import { ref } from "vue";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/plugins/firebase";

export function useProjects() {
  const projects = ref([]);
  const loading = ref(true);
  const error = ref(null);

  async function fetchProjects() {
    try {
      loading.value = true;
      error.value = null;

      const q = query(collection(db, "projects"), orderBy("order", "asc"));

      // Executa a consulta
      const querySnapshot = await getDocs(q);

      projects.value = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      console.error("Erro ao buscar projetos:", err);
      error.value = err.message || "Erro ao carregar projetos";
    } finally {
      loading.value = false;
    }
  }

  return {
    projects,
    loading,
    error,
    fetchProjects,
  };
}
