<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Alumni Page </q-toolbar-title>
        <span class="a-mx-md">{{ user.displayName }}</span>
        <q-btn flat @click="logout" icon="logout" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import signout from "src/firebase/firebase-signout";
import { useRouter } from "vue-router";
import { LocalStorage } from "quasar";

const router = useRouter();

const user = LocalStorage.getItem("user");

const logout = () => {
  signout().then(() => {
    router.push("/login");
  });
};
</script>
