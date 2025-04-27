<script>
import TextLine from "@/components/TextLine.vue";
import { defineComponent } from "vue";
import GalleryItem from "@/components/GalleryItem.vue";

const imagePaths = import.meta.glob(
  ["@/images/students*.webp", "@/images/students*.jpg"],
  { eager: true },
);

const importedImages = Object.values(imagePaths).map(
  (module) => module.default,
);

export default defineComponent({
  components: { GalleryItem, TextLine },
  data() {
    return {
      images: importedImages,
    };
  },
});
</script>

<template>
  <div class="w-[87%]">
    <TextLine class="mb-[1rem]">GALLERY</TextLine>
    <div class="gallery-container w-full">
      <GalleryItem
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Gallery image ' + index"
      />
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 420px;
  gap: 1rem;
}
</style>
