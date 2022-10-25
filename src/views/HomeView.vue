<script setup>
import ActionButtons from "../components/ActionButtons.vue";
import ProfilePhoto from "../components/ProfilePhoto.vue";
import SectionButtons from "../components/SectionButtons.vue";
</script>

<template>
  <div class="w-full sm:w-[700px]">
    <div class="flex flex-col items-center">
      <ProfilePhoto></ProfilePhoto>
      <ActionButtons></ActionButtons>
      <SectionButtons></SectionButtons>
    </div>
  </div>
</template>
