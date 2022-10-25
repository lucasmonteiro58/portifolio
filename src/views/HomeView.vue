<script setup>
import ActionButtons from "../components/ActionButtons.vue";
import CardSmall from "../components/CardSmall.vue";
import ProfilePhoto from "../components/ProfilePhoto.vue";
import SectionButtons from "../components/SectionButtons.vue";

import cards from "@/consts/cards";
</script>

<template>
  <div class="w-full sm:w-[700px]">
    <div class="flex flex-col items-center">
      <ProfilePhoto></ProfilePhoto>
      <ActionButtons></ActionButtons>
      <SectionButtons></SectionButtons>
    </div>
    <div class="grid grid-cols-notes gap-5 mt-10">
      <CardSmall
        v-for="card in cards"
        :key="card.title"
        :card="card"
      ></CardSmall>
    </div>
  </div>
</template>
