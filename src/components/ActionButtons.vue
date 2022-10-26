<script setup></script>

<template>
  <div class="flex justify-center mt-10 gap-x-8 gap-y-4">
    <button
      class="bg-blueLight sm:px-8 px-6 py-4 rounded-md hover:bg-[#92bafb] dark:text-grayText font-medium shadow-sm active:shadow-md sm:min-w-[200px]"
    >
      {{ $t("downloadCV") }}
      <IconifyIcon icon="charm:download" class="ml-1 inline"></IconifyIcon>
    </button>
    <button
      class="bg-white sm:px-12 px-8 py-4 rounded-md font-medium dark:bg-[#171f26] shadow-sm active:shadow-md sm:min-w-[200px]"
    >
      {{ $t("contactMe") }}
    </button>
  </div>
</template>
