<template>
  <NewItems />
</template>

<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import NavBar from "../components/NavBar.vue";
import { RouterView } from "vue-router";

import { useLoginStore } from "../stores/login";

const store = useLoginStore();
import NewItems from "../components/NewItems.vue";
</script>
