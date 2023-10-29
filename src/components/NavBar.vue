<template>
  <div class="navbar-container">
    <RouterLink to="/" class="navbar-left">
      <font-awesome-icon icon="fa-solid fa-house" />
      <div>HOME</div>
    </RouterLink>

    <Modal ref="modal" />
    <div class="navbar-left">
      <font-awesome-icon @click="openModal" icon="fa-solid fa-cart-shopping" />
      <div @click="openModal">CART</div>
      <div class="badge-cont">
        <div class="badge">{{ cartStore.totalQuantity }}</div>
      </div>
    </div>

    <RouterLink to="/login" class="navbar-right">
      <font-awesome-icon icon="fa-solid fa-user" />
      <div>USER</div>
    </RouterLink>

    <form class="search-bar">
      <input type="search" id="search" />
      <button>Search</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Modal from "./Modal.vue";
import { useCartStore } from "../stores/shoppingCart";

const cartStore = useCartStore();
const modal = ref();

const openModal = () => {
  modal.value.openModal();
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar-left {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
}

.navbar-left :hover {
  cursor: pointer;
  color: gray;
}

.navbar-right {
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
}

.search-bar {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}

.badge {
  padding: 0 3px;
  background-color: #5c3996;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 5px;
  position: absolute;
  top: -50px;
  right: 0px;
  width: 1.2rem;
}

.badge-cont {
  position: relative;
}
</style>
