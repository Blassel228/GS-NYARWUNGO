<script setup>
import TextLine from "@/components/TextLine.vue";
import Column from "@/components/Column.vue";
import Row from "@/components/Row.vue";
import ContactCard from "@/components/ContactCard.vue";
</script>

<template>
  <Column class="w-[87%]">
    <TextLine>Contact</TextLine>
    <p class="text-[1.5rem] font-light">PLEASE REACH US ON</p>

    <Row class="gap-[1rem] h-[13rem]">
      <ContactCard>
        <p class="text-[2rem] font-bold">ADDRESS</p>
        <p class="text-[1.3rem]">HF66+6W9, Rwanda</p>
      </ContactCard>
      <ContactCard>
        <p class="text-[2rem] font-bold">PHONE</p>
        <p class="text-[1.3rem]">+250 784 387 294</p>
      </ContactCard>
      <ContactCard>
        <p class="text-[2rem] font-bold">EMAIL</p>
        <p class="text-[1.3rem]">ahimbiseenoch@gmail.com</p>
      </ContactCard>
    </Row>
  </Column>
</template>
