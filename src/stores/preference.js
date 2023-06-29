import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { useDark, useToggle } from "@vueuse/core";

export const usePreferenceStore = defineStore("preference", () => {
  const i18n = useI18n();
  const language = ref(i18n.locale.value);

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const tag = document.querySelector('meta[name="theme-color"]');

  function toggleTheme() {
    toggleDark();
    tag.setAttribute("content", isDark.value ? "#0c151d" : "#e9ebec");
  }

  function darkTheme() {
    if (isDark.value) tag.setAttribute("content", "#0c151d");
  }

  const toogleLanguage = () => {
    language.value = language.value === "en" ? "pt-BR" : "en";
    i18n.locale.value = language.value;
    localStorage.setItem("language", language.value);
  };

  return {
    language,
    i18n,
    toogleLanguage,
    isDark,
    toggleTheme,
    darkTheme,
  };
});
