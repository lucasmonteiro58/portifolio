<script setup></script>

<template>
  <div class="flex justify-center mt-10 sm:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
    <a
      download="CV - Lucas Monteiro Ribeiro.pdf"
      href="https://drive.google.com/file/d/1lSb6KVK04qngrB1K1C5olXfboPTLCPjR/view?usp=sharing"
      target="_blank"
      class="w-full xs:w-fit"
    >
      <button
        class="bg-blueLight sm:px-8 px-4 py-4 rounded-md hover:bg-[#92bafb] dark:text-grayText font-medium shadow-sm active:shadow-md sm:min-w-[200px] w-full"
      >
        {{ $t("downloadCV") }}
        <IconifyIcon icon="charm:download" class="ml-1 inline"></IconifyIcon>
      </button>
    </a>

    <a
      href="https://wa.me/+5585998027993"
      target="_blank"
      class="w-full xs:w-fit"
    >
      <button
        class="bg-white sm:px-12 px-5 py-4 rounded-md font-medium dark:bg-[#171f26] shadow-sm active:shadow-md sm:min-w-[200px] w-full"
      >
        {{ $t("contactMe") }}
      </button>
    </a>
  </div>
</template>
