<template>
  <p id="a">CurrentTime:</p>
</template>

<script setup>
import { onMounted } from "vue";

const curTime = () => {
  let ct = document.getElementById("a");
  setInterval(() => {
    let currentTime = new Date().getTime();
    ct.innerText =
      "Current Time : " + new Date(currentTime).toLocaleTimeString();
  }, 1000);
};

onMounted(() => {
  curTime();
});
</script>
