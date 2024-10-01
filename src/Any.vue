<template>
  <div class="container" v-if="show">
    <p style="color: white; font-weight:bold">This page has been moved to a new location.</p>
    <p>
      If you are not redirected automatically in
      {{ Math.floor(timer / 1000) }} seconds, 
      please click the link below:
    </p>
    <div class="mt-4 fs-4">
      <a :href="newSite" target="_self" rel="noopener noreferrer">{{
        newSite
      }}</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const show = ref(false);
const timer = ref(6000);
const interval = setInterval(() => {
  timer.value -= 1000;
  if (timer.value <= 0) {
    clearInterval(interval);
    window.location.replace(newSite);
  }
}, 1000);
setTimeout(() => {
  show.value = true;
}, 500);
const router = useRouter();
const currentRoute = router?.currentRoute?.value;
const query = currentRoute?.query;

const path = currentRoute?.fullPath;
const newHost = 'https://priorb.com';
const newSite = `${newHost}${path}`;
setTimeout(() => {
  window.location.replace(newSite)
}, 0);
</script>

<style scoped>
.fs-4 {
  font-size: 1rem;
  text-decoration: underline;
  word-wrap: break-word;
  max-width: 80ch;
  margin: 20px auto;
  line-height: 1.2;
  text-align: center;
  width: 100%;
}
.container {
  padding: 20px;
}
</style>
