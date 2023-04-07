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
  data.value = await axios
    .get("https://www.nseindia.com/api/quote-equity?symbol=TCS")
    .then((r) => r.data);
  consile.log(data.value);
});
</script>
