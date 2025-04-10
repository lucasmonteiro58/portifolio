import { createI18n } from "vue-i18n";
import { supabase } from "@/plugins/supabase";

const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages: {},
  missingWarn: false,
  fallbackWarn: false,
});

export async function loadTranslations() {
  const { data: rows, error } = await supabase
    .from("translations")
    .select("language, key, value");

  if (error) throw error;

  const messagesByLocale = {};

  for (const row of rows) {
    const { language, key, value } = row;

    if (!messagesByLocale[language]) {
      messagesByLocale[language] = {};
    }

    // suporta chave aninhada com 'about.text'
    const keyParts = key.split(".");
    let target = messagesByLocale[language];

    keyParts.forEach((part, index) => {
      if (index === keyParts.length - 1) {
        target[part] = value;
      } else {
        target[part] = target[part] || {};
        target = target[part];
      }
    });
  }

  for (const locale in messagesByLocale) {
    i18n.global.setLocaleMessage(locale, messagesByLocale[locale]);
  }
}

export default i18n;
