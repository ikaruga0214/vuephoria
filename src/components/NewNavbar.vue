<template>
  <nav>
    <div class="navbar-container">
      <div class="navbar-start col-1">
        <div class="child">
          <RouterLink to="/">
            <font-awesome-icon icon="fa-solid fa-house" />
            <div>HOME</div>
          </RouterLink>
        </div>

        <div class="child">
          <font-awesome-icon
            @click="openModal"
            icon="fa-solid fa-cart-shopping"
          />
          <div @click="openModal">CART</div>

          <div>{{ cartStore.totalQuantity }}</div>
        </div>
      </div>

      <div class="navbar-mid col-1">
        <form>
          <input type="search" id="search" />
          <button>Search</button>
        </form>
      </div>

      <div class="navbar-end col-1">
        <RouterLink to="/login">
          <font-awesome-icon icon="fa-solid fa-user" />
          <div>USER</div>
        </RouterLink>
      </div>
    </div>
  </nav>
  <Modal ref="modal" />
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
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar-start {
  display: flex;
  justify-content: flex-start;
  color: white;
  flex-direction: row;
  text-align: center;
  width: auto;
  text-decoration: none;
  gap: 30px;
}

.navbar-left :hover {
  cursor: pointer;
  color: gray;
}

.navbar-mid {
  display: flex;
  width: auto;
  justify-content: center;
  text-align: center;
}

.navbar-end {
  display: flex;
  justify-content: flex-end;
  color: white;
  text-align: center;
  width: auto;
  text-decoration: none;
}

@media (max-width: 600px) {
  .navbar-container {
    flex-direction: column;
  }

  .col-1 {
    display: block;
    width: 100%;
  }
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
