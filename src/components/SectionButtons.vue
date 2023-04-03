<script setup>
defineProps({ portifolio: { type: Boolean, required: true } });
const emits = defineEmits(["portifolio", "about"]);

function tooglePortifolio() {
  emits("portifolio");
}

function aboutMe() {
  emits("about");
}
</script>

<template>
  <div
    class="flex justify-center mt-8 bg-white px-4 py-4 rounded-xl w-fit dark:bg-[#171f26]"
  >
    <button
      @click="tooglePortifolio"
      class="sm:px-8 px-9 py-4 rounded-md font-medium sm:min-w-[240px]"
      :class="
        portifolio
          ? 'bg-[#d7d7d7] dark:bg-[#0c151d]'
          : 'bg-white dark:bg-[#171f26]'
      "
    >
      {{ $t("portifolio") }}
    </button>
    <button
      @click="aboutMe"
      class="= sm:px-8 px-9 py-4 rounded-md font-medium sm:min-w-[240px]"
      :class="
        portifolio
          ? 'bg-white dark:bg-[#171f26]'
          : 'bg-[#d7d7d7] dark:bg-[#0c151d]'
      "
    >
      {{ $t("about") }}
    </button>
  </div>
</template>
