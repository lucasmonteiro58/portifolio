import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { vueI18n } from "./plugins/i18n";
import { globalComponents } from "./plugins/global-components";
import { MotionPlugin } from "@vueuse/motion";

import "./assets/main.css";

import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);
vueI18n(app);
globalComponents(app);

app.mount("#app");
