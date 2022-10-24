<script setup></script>

<template>
  <div class="flex justify-center mt-10 flex-wrap gap-x-8 gap-y-4">
    <button
      class="bg-blueLight px-8 py-4 rounded-md hover:bg-[#92bafb] dark:text-grayText font-medium min-w-[200px] shadow-sm active:shadow-md"
    >
      {{ $t("downloadCV") }}
      <IconifyIcon icon="charm:download" class="ml-1 inline"></IconifyIcon>
    </button>
    <button
      class="bg-white px-12 py-4 rounded-md font-medium min-w-[200px] dark:bg-[#171f26] shadow-sm active:shadow-md"
    >
      {{ $t("contactMe") }}
    </button>
  </div>
</template>
