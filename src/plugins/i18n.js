import { createI18n } from "vue-i18n";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/plugins/firebase";

const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages: {},
  missingWarn: false,
  fallbackWarn: false,
});

export async function loadTranslations() {
  try {
    const querySnapshot = await getDocs(collection(db, "translations"));

    const messagesByLocale = {};

    querySnapshot.forEach((doc) => {
      const { language, key, value } = doc.data();

      if (!messagesByLocale[language]) {
        messagesByLocale[language] = {};
      }

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
    });

    for (const locale in messagesByLocale) {
      i18n.global.setLocaleMessage(locale, messagesByLocale[locale]);
    }
  } catch (error) {
    console.error("Error loading translations:", error);
    throw error;
  }
}

export default i18n;
