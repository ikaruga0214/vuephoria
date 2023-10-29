<template>
  <div class="item-page">
    <div>
      <RouterLink to="/">
        <img :src="`../${itemDetails.image}`" />
      </RouterLink>
      <p>{{ itemDetails.description }}</p>
    </div>

    <!-- <div class="slide-show">
      <div v-for="(item, index) in abb" :key="index">
        <img :src="`../${item.image}`" />
      </div>
      <div v-for="(item, index) in abb.length" :key="index">
        <span class="dot"></span>
      </div>
    </div> -->
    <div class="slide-show">
      <button @click="backPage">&#10094;</button>
      <div v-for="item in paginatedData" :key="item._id">
        <RouterLink :to="`./${item._id}`">
          <img :src="`../${item.image}`" />
        </RouterLink>
        {{ item.name }}
      </div>
      <button @click="nextPage">&#10095;</button>

      <!-- <button
        v-for="item in Math.ceil(data.data.length / perPage)"
        :key="item"
        @click="() => goPage(item)"
      >
        {{ item }}
      </button> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);

import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";
import { onBeforeRouteUpdate } from "vue-router";

const data = useDataStore();
const itemDetails = ref();
const showedSlideItems = ref();

itemDetails.value = data.data.find((item) => item._id === props.product);
showedSlideItems.value = data.data.filter((item) => item._id !== props.product);

let page = ref(1);
const perPage = 5;

const paginatedData = computed(() =>
  data.data
    .filter((item) => item._id !== props.product)
    .map((item) => item)
    .slice((page.value - 1) * perPage, page.value * perPage)
);

const nextPage = () => {
  if (page.value !== Math.ceil(showedSlideItems.value.length / perPage)) {
    page.value += 1;
  }
};

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1;
  }
};

onBeforeRouteUpdate((to, from) => {
  if (to.params.product !== from.params.product) {
    itemDetails.value = data.data.find(
      (item) => item._id === to.params.product
    );
  }
});
</script>

<style lang="scss" scoped>
.item-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100%;
  background-color: #f1f1f1;
}

.item-card {
  display: flex;
}
img {
  height: 500px;

  @media (max-width: 750px) {
    width: 100%;
  }
}

.slide-show {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;

  @media (max-width: 750px) {
    width: 100vw;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 80px;
    width: 80px;
    margin: 0px 2px;

    @media (max-width: 750px) {
      max-width: 100%;
    }
  }
}
</style>
