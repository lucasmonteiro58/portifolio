<script setup>
defineProps({ card: { type: Object, required: true } });
</script>

<template>
  <div
    class="group w-full sm:h-[140px] h-[170px] xs:h-[200px] rounded-xl flex flex-col justify-center items-center relative transition-all duration-300 shadow-md cursor-pointer p-3"
  >
    <div
      class="absolute z-10 flex flex-col items-center justify-center w-full h-full fill-animation rounded-xl"
    >
      <div
        class="z-10 hidden text-lg font-bold leading-4 text-center group-hover:block text-grayText"
      >
        {{ $t(`projects.${card.name}.title`) }}
      </div>
      <div
        class="z-10 hidden px-2 mt-2 text-sm leading-4 text-center group-hover:block text-grayText"
      >
        {{ $t(`projects.${card.name}.subtitle`) }}
      </div>
    </div>

    <div
      class="absolute w-full h-full overflow-hidden bg-cover group-hover:grayscale rounded-xl"
      :style="{ backgroundImage: `url(${card.image_url})` }"
    />
  </div>
</template>
