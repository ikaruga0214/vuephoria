<template>
  <section class="banner-container"></section>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner-container {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 70, 0.66) 5%,
    rgba(28, 181, 224, 0.66) 95%
  );
  display: flex !important;
  min-height: 250px;
}

.banner-container::before {
  content: "";
  background: url("https://cdn.pixabay.com/photo/2019/01/19/13/12/synthwave-3941721_1280.jpg")
    no-repeat top 25% center;
  background-size: cover;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 70vh;
}

.banner-container::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
  opacity: 0.7;
}
</style>
