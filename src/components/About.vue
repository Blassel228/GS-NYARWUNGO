<script setup>
import Row from "@/components/Row.vue";
import Image from "@/components/Image.vue";
import image from "@/images/image1.jpg";
</script>

<template>
  <Row class="gap-6">
    <Image
      :image="image"
      :text="'Hello'"
      class="w-[50%] max-h-120 rounded-md"
    />
    <div class="bg-gray-100 w-[35%] p-6 rounded-md items-stretch">
      <div class="m-[1.3rem]">
        <h1 class="text-3xl font-bold mb-[1rem]">ABOUT US</h1>
        <p class="text-gray-700 flex text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, nulla sit amet euismod sagittis, justo odio efficitur dui,
          at volutpat risus nisi ut augue. Proin fermentum nisi eu libero
          pellentesque dapibus. Nulla facilisi. Curabitur posuere, nunc ut
          cursus dapibus, ligula felis consequat erat, et tincidunt nisl justo
          nec eros. Fusce tristique libero ac purus interdum, id fringilla nunc
          tristique. Donec eget turpis sed erat cursus vehicula a at odio. Sed
          ut lacus sit amet magna fermentum fermentum non eu nunc. Fusce
          tristique libero ac purus interdum, id fringilla nunc tristique. Donec
          eget turpis sed erat cursus vehicula a at odio. Sed ut lacus sit amet
          magna fermentum fermentum non eu nunc.
        </p>
      </div>
    </div>
  </Row>
</template>
