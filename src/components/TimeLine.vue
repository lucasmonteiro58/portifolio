<script setup>
import { useJobs } from "@/composables/useJobs";
const { fetchJobs, jobs } = useJobs();

function isEven(n) {
  return n % 2 == 0;
}

onMounted(async () => {
  await fetchJobs();
});
</script>

<template>
  <div class="container w-full h-full mx-auto">
    <div class="relative h-full p-0 mt-10 overflow-hidden wrap sm:p-10">
      <div
        class="absolute h-full border border-gray-700 border-2-2 border-opacity-20 dark:border-gray-200"
        style="left: 50%"
      ></div>
      <!-- right timeline -->
      <div
        v-for="(timeline, i) in jobs"
        :key="timeline"
        class="flex items-center justify-between w-full mb-8 right-timeline"
        :class="isEven(i) ? 'flex-row-reverse' : 'flex-row'"
      >
        <div class="order-1 w-5/12"></div>
        <div
          class="z-20 flex items-center justify-center order-1 bg-[#e9ebec] dark:bg-[#0c151d] w-8 h-8 rounded-full border-2 border-[#bcbcbc]"
        >
          <img
            :src="timeline.image"
            alt=""
            class="rounded-full w-[30px] pointer-events-none"
          />
        </div>
        <div
          class="order-1 w-5/12 px-2 py-4 sm:px-2"
          :class="isEven(i) ? 'text-right' : ''"
        >
          <h3 class="mb-1 font-bold leading-5 uppercase sm:text-lg text-md">
            {{ $t("timeline." + timeline.name + ".title") }}
          </h3>
          <div class="mb-1 font-semibold leading-5">
            {{ $t("timeline." + timeline.name + ".subtitle") }}
          </div>
          <div class="mb-1 text-sm">
            <a :href="timeline.site" target="_blank">
              {{ $t("timeline." + timeline.name + ".locale") }}
            </a>
          </div>
          <div class="text-sm">
            {{ $t("timeline." + timeline.name + ".date") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
