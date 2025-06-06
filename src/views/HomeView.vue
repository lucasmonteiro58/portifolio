<script setup>
import ActionButtons from "../components/ActionButtons.vue";
import CardSmall from "../components/CardSmall.vue";
import ProfilePhoto from "../components/ProfilePhoto.vue";
import SectionButtons from "../components/SectionButtons.vue";
import CardBig from "../components/CardBig.vue";
import TimeLine from "../components/TimeLine.vue";
import { useProjects } from "@/composables/useProjects";

import techs from "@/consts/tech";

const { fetchProjects, projects } = useProjects();

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
function openPortifolio() {
  portifolio.value = true;
}

function openAbout() {
  portifolio.value = false;
}

onMounted(async () => {
  await fetchProjects();
});
</script>

<template>
  <div class="w-full sm:w-[700px]">
    <div class="flex flex-col items-center">
      <ProfilePhoto></ProfilePhoto>
      <ActionButtons></ActionButtons>
      <SectionButtons
        :portifolio="portifolio"
        @portifolio="openPortifolio"
        @about="openAbout"
      ></SectionButtons>
    </div>
    <div
      v-motion-slide-right
      v-if="portifolio"
      class="grid gap-5 mt-10 mb-24 grid-cols-notes"
    >
      <CardSmall
        v-for="project in projects"
        :key="project.name"
        :card="project"
        @click="openCard(project)"
      ></CardSmall>
    </div>
    <div v-motion-slide-left v-else class="mt-10 mb-10">
      <div class="text-xl font-bold">{{ $t("aboutMe") }}</div>
      <div class="mt-4">{{ $t("aboutText") }}</div>
      <div class="mt-8 text-xl font-bold">{{ $t("techText") }}</div>
      <div
        class="grid items-center grid-cols-3 mx-auto mt-12 sm:grid-cols-5 gap-y-6 gap-x-4 w-fit"
      >
        <div v-for="tech in techs" :key="tech">
          <img
            class="sm:h-[45px] h-[40px] grayscale hover:grayscale-0 transition-all duration-300"
            :src="tech.image"
            :alt="tech.name"
            :title="tech.name"
          />
        </div>
      </div>
      <div class="mt-16 text-xl font-bold">{{ $t("formation") }}</div>
      <TimeLine></TimeLine>
    </div>
    <CardBig v-if="showCard" :card="cardSelected" @close="closeCard"></CardBig>
  </div>
</template>
