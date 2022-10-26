<script setup>
import ActionButtons from "../components/ActionButtons.vue";
import CardSmall from "../components/CardSmall.vue";
import ProfilePhoto from "../components/ProfilePhoto.vue";
import SectionButtons from "../components/SectionButtons.vue";
import CardBig from "../components/CardBig.vue";

import cards from "@/consts/cards";

const cardSelected = ref(null);
const showCard = ref(false);

function openCard(card) {
  cardSelected.value = card;
  showCard.value = true;
}

function closeCard() {
  showCard.value = false;
  cardSelected.value = null;
}
</script>

<template>
  <div class="w-full sm:w-[700px]">
    <div class="flex flex-col items-center">
      <ProfilePhoto></ProfilePhoto>
      <ActionButtons></ActionButtons>
      <SectionButtons></SectionButtons>
    </div>
    <div class="grid grid-cols-notes gap-5 mt-10 mb-24">
      <CardSmall
        v-for="card in cards"
        :key="card.name"
        :card="card"
        @click="openCard(card)"
      ></CardSmall>
    </div>
    <CardBig v-if="showCard" :card="cardSelected" @close="closeCard"></CardBig>
  </div>
</template>
