import { createI18n } from "vue-i18n";

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../../locales/*.y(a)?ml", { eager: true })
  ).map(([key, value]) => {
    const yaml = key.endsWith(".yaml");
    return [key.slice(14, yaml ? -5 : -4), value.default];
  })
);

export const vueI18n = (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: "pt-BR",
    messages,
  });

  app.use(i18n);
};
