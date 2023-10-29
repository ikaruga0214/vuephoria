<template>
  <button class="app-button" ref="appButton" @click="scrollToTop">
    <font-awesome-icon icon="fa-solid fa-arrow-up" />
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from "vue";

const appButton = ref();
const userScroll = () => {
  if (window.scrollY > 0) {
    appButton.value.classList.add("showButton");
  } else {
    appButton.value.classList.remove("showButton");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", userScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", userScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", userScroll);
});
</script>

<style scoped>
.app-button {
  display: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 4px;
  box-shadow: 2px 2px #e9e9e9;
  cursor: pointer;
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 10;
}

.showButton {
  display: block;
}
</style>
