<template>
  <h2 class="text-h4 q-pa-md">New Registrations</h2>
  <pre>{{ newMembers }}</pre>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { db, auth } from "./../firebase/index";
import { LocalStorage } from "quasar";
import { collection, getDocs, query, where } from "firebase/firestore";

const user = LocalStorage.getItem("user");
const newMembers = ref([]);

const getMembers = async () => {
  let q = query(collection(db, "members"), where("is_varified", "==", false));
  let res = await getDocs(q);
  res.forEach((member) => {
    newMembers.value.push({ id: member.id, ...member.data() });
  });
};
onMounted(async () => {
  if (user) {
    const q = query(
      collection(db, "members"),
      where("email", "==", user.email)
    );
    const res = await getDocs(q);
    res.forEach((doc) => {
      console.log(doc.id);
    });
  }
  getMembers();
});
</script>
