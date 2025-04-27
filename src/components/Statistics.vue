<template>
  <Row
    class="flex justify-center items-center w-[87%] h-[15rem] bg-gray-100 rounded-lg gap-[15rem] text-center"
  >
    <div class="flex flex-col items-center">
      <TextLine class="text-blue-500 py-0">262</TextLine>
      <p>STUDENTS</p>
    </div>
    <div class="flex flex-col items-center">
      <TextLine class="text-blue-500 py-0 py-0">15</TextLine>
      <p>TEACHERS</p>
    </div>
    <div class="flex flex-col items-center">
      <TextLine class="text-blue-500 py-0 py-0">5</TextLine>
      <p>OTHER WORKERS</p>
    </div>
  </Row>
</template>

<script setup>
import Row from "@/components/Row.vue";
import TextLine from "@/components/TextLine.vue";
</script>
