<script setup>
import { UseDark } from "@vueuse/components";
import { usePreferenceStore } from "./stores/preference";

const { toogleLanguage } = usePreferenceStore();
</script>

<template>
  <div
    class="bg-grayLight min-h-screen w-full dark:bg-blueDark flex flex-col items-center px-5"
  >
    <div class="flex justify-center gap-x-3 pt-4">
      <button
        class="bg-white rounded-full w-10 h-10 text-sm font-medium dark:bg-[#171f26] dark:text-[#cecece] shadow"
        @click="toogleLanguage"
      >
        {{ $t("currentLanguage") }}
      </button>
      <UseDark v-slot="{ isDark, toggleDark }">
        <button
          class="bg-white rounded-full w-10 h-10 flex justify-center items-center dark:bg-[#171f26] dark:text-[#cecece] shadow"
          @click="toggleDark()"
        >
          <IconifyIcon
            :icon="isDark ? 'carbon-moon' : 'carbon-sun'"
          ></IconifyIcon>
        </button>
      </UseDark>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
