<template>
  <ItemDetails :product="product" />
</template>

<script setup>
const props = defineProps(["product"]);
import ItemDetails from "../components/ItemDetails.vue";
import Pagination from "../components/Pagination.vue";
</script>

<style lang="scss" scoped></style>
