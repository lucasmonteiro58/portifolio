<script setup>
import ActionButtons from "../components/ActionButtons.vue";
import CardSmall from "../components/CardSmall.vue";
import ProfilePhoto from "../components/ProfilePhoto.vue";
import SectionButtons from "../components/SectionButtons.vue";
import CardBig from "../components/CardBig.vue";

import cards from "@/consts/cards";
import techs from "@/consts/tech";

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

const portifolio = ref(true);
function tooglePortifolio() {
  portifolio.value = !portifolio.value;
}
</script>

<template>
  <div class="w-full sm:w-[700px]">
    <div class="flex flex-col items-center">
      <ProfilePhoto></ProfilePhoto>
      <ActionButtons></ActionButtons>
      <SectionButtons
        :portifolio="portifolio"
        @toogle="tooglePortifolio"
      ></SectionButtons>
    </div>
    <div
      v-motion-slide-right
      v-if="portifolio"
      class="grid grid-cols-notes gap-5 mt-10 mb-24"
    >
      <CardSmall
        v-for="card in cards"
        :key="card.name"
        :card="card"
        @click="openCard(card)"
      ></CardSmall>
    </div>
    <div v-motion-slide-left v-else class="mt-10 mb-10">
      <div class="text-xl font-bold">{{ $t("aboutMe") }}</div>
      <div class="mt-4">{{ $t("aboutText") }}</div>
      <div class="text-xl font-bold mt-8">{{ $t("techText") }}</div>
      <div
        class="grid sm:grid-cols-5 grid-cols-3 gap-y-6 gap-x-4 mt-12 w-fit mx-auto items-center"
      >
        <div v-for="tech in techs" :key="tech">
          <img
            class="sm:h-[50px] h-[40px] grayscale hover:grayscale-0 transition-all duration-300"
            :src="tech.image"
            :alt="tech.name"
            :title="tech.name"
          />
        </div>
      </div>
      <div class="text-xl font-bold mt-16">{{ $t("formation") }}</div>
    </div>
    <CardBig v-if="showCard" :card="cardSelected" @close="closeCard"></CardBig>
  </div>
</template>
