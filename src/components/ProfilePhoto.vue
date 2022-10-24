<script setup></script>

<template>
  <div class="flex justify-center mt-7">
    <img src="@/assets/images/profile.png" alt="profile" class="w-[120px]" />
    <div class="ml-5 mt-2">
      <div class="text-2xl font-bold">Lucas Monteiro</div>
      <div class="text-grayText dark:text-grayLight">
        {{ $t("frontEnd-developer") }}
      </div>
      <div class="flex gap-x-2 text-grayText dark:text-grayLight mt-2">
        <IconifyIcon icon="akar-icons:github-fill"></IconifyIcon>
        <IconifyIcon icon="akar-icons:linkedin-box-fill"></IconifyIcon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
