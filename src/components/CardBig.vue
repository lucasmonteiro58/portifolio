<script setup>
defineProps({ card: { type: Object, required: true } });

const emits = defineEmits(["close"]);

function close() {
  emits("close");
}

function openLink(link) {
  window.open(link, "_blank");
}

function openCode(link) {
  window.open(link, "_blank");
}
</script>

<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-40 backdrop-blur bg-[#efefe996] dark:bg-[#2b2e32] overflow-auto"
    @click.self="close"
  >
    <dialog
      open
      v-motion-pop
      class="w-[90%] sm:w-[700px] rounded-lg py-5 px-5 dark:bg-[#0c151d] z-50 relative"
    >
      <button
        class="float-right mb-4 text-xl dark:text-[#cecece]"
        @click="close"
      >
        <IconifyIcon icon="carbon:close"></IconifyIcon>
      </button>
      <img
        :src="card.image_url"
        alt="image"
        class="w-full border border-gray-200 rounded-md"
      />
      <div
        class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-between gap-y-2"
      >
        <div
          class="text-xl font-bold text-grayText dark:text-[#cecece] leading-5"
        >
          {{ $t(`projects.${card.name}.title`) }}
        </div>
        <div>
          <button
            v-if="card.link_code"
            class="bg-blueLight px-3 py-2 rounded-md hover:bg-[#92bafb] dark:text-grayText font-medium shadow-sm active:shadow-md mr-3"
            @click="openCode(card.link_code)"
          >
            <IconifyIcon
              icon="akar-icons:github-fill"
              class="inline"
            ></IconifyIcon>
          </button>
          <button
            v-if="card.link"
            class="bg-blueLight px-2 py-2 rounded-md hover:bg-[#92bafb] dark:text-grayText font-medium min-w-[120px] shadow-sm active:shadow-md"
            @click="openLink(card.link)"
          >
            {{ $t("access") }}
          </button>
        </div>
      </div>

      <div class="text-grayText text-sm mt-4 dark:text-[#cecece]">
        {{ $t(`projects.${card.name}.description`) }}
      </div>
      <div class="flex flex-wrap gap-2 mt-5">
        <div
          v-for="tag in card.tags"
          :key="tag"
          class="text-sm bg-green-100 px-2 py-[2px] rounded"
        >
          {{ tag }}
        </div>
      </div>
    </dialog>
  </div>
</template>
