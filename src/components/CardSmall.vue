<script setup>
defineProps({ card: { type: Object, required: true } });
</script>

<template>
  <div
    class="group w-full h-[140px] rounded-xl flex flex-col justify-center items-center relative transition-all duration-300 shadow-md cursor-pointer p-3"
  >
    <div
      class="fill-animation w-full h-full z-10 absolute flex flex-col justify-center items-center rounded-xl"
    >
      <div
        class="text-lg font-bold z-10 hidden group-hover:block text-grayText"
      >
        {{ $t(card.title) }}
      </div>
      <div
        class="text-sm z-10 hidden group-hover:block text-grayText text-center px-2"
      >
        {{ $t(card.subtitle) }}
      </div>
    </div>

    <div
      class="absolute w-full overflow-hidden h-full bg-cover group-hover:grayscale rounded-xl"
      :style="{ backgroundImage: `url(${card.image})` }"
    />
  </div>
</template>
