<template>
  <div class=" font-bricolage max-w-screen-xl mx-auto px-[25px]">
    <NavBar/>
    <RouterView/>
    <FootComponents/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import FootComponents from './components/FootComponents.vue';
import { RouterView } from "vue-router";
</script>

