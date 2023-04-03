<script setup>
import timelines from "../consts/timeline";

function isEven(n) {
  return n % 2 == 0;
}
</script>

<template>
  <div class="container mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden sm:p-10 p-0 h-full mt-10">
      <div
        class="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-200 h-full border"
        style="left: 50%"
      ></div>
      <!-- right timeline -->
      <div
        v-for="(timeline, i) in timelines"
        :key="timeline"
        class="mb-8 flex justify-between items-center w-full right-timeline"
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
          class="order-1 w-5/12 sm:px-2 px-2 py-4"
          :class="isEven(i) ? 'text-right' : ''"
        >
          <h3 class="mb-1 font-bold sm:text-lg text-md uppercase leading-5">
            {{ $t("timeline." + timeline.name + ".title") }}
          </h3>
          <div class="font-semibold leading-5 mb-1">
            {{ $t("timeline." + timeline.name + ".subtitle") }}
          </div>
          <div class="text-sm mb-1">
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
