<script setup>
const portifolio = ref(true);
function tooglePortifolio() {
  portifolio.value = !portifolio.value;
}
</script>

<template>
  <div
    class="flex justify-center mt-8 bg-white px-4 py-4 rounded-xl w-fit dark:bg-[#171f26]"
  >
    <button
      @click="tooglePortifolio"
      class="sm:px-8 px-11 py-4 rounded-md font-medium sm:min-w-[240px]"
      :class="
        portifolio
          ? 'bg-[#d7d7d7] dark:bg-[#0c151d]'
          : 'bg-white dark:bg-[#171f26]'
      "
    >
      {{ $t("portifolio") }}
    </button>
    <button
      @click="tooglePortifolio"
      class="= sm:px-8 px-11 py-4 rounded-md font-medium sm:min-w-[240px]"
      :class="
        portifolio
          ? 'bg-white dark:bg-[#171f26]'
          : 'bg-[#d7d7d7] dark:bg-[#0c151d]'
      "
    >
      {{ $t("aboutMe") }}
    </button>
  </div>
</template>
