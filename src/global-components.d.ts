import { Icon } from "@iconify/vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    IconifyIcon: typeof Icon;
  }
}
