<script setup>
import CustomLink from "@/components/CustomLink.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="w-full fixed top-0 left-0 px-10 py-4 transition-colors duration-300 z-9999 flex justify-between flex-row flex-nowrap pl-30 pr-30"
    :class="{ 'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="flex items-center space-x-3">
      <img
        class="object-cover w-[70px] h-8"
        src="../images/school1.jpg"
        alt="students"
      />
    </div>

    <div class="flex space-x-6 flex-row gap-0.5">
      <a href="#swiper">Home</a>
      <a href="#about">About us</a>
      <a href="#statistics">Statistics</a>
      <a href="#map">Map</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>
  </header>
</template>

