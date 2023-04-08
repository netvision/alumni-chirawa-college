<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script setup>
import { axios } from "../boot/axios";
import { ref, onMounted } from "vue";

const data = ref();

onMounted(async () => {
  console.log(import.meta.env);
});
</script>
