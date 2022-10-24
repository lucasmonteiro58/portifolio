import { defineStore } from "pinia";

import { useI18n } from "vue-i18n";

export const usePreferenceStore = defineStore("preference", () => {
  const i18n = useI18n();
  const language = ref(i18n.locale.value);

  const toogleLanguage = () => {
    language.value = language.value === "en" ? "pt-BR" : "en";
    i18n.locale.value = language.value;
  };

  return {
    language,
    i18n,
    toogleLanguage,
  };
});
