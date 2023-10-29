<template>
  <div class="modal-container">
    <dialog id="modal1" ref="modal1" style="width: 1000px">
      <h1 style="margin: 0px">PRICE</h1>
      <div v-if="store.shoppingCart.length === 0">NO ITEM</div>
      <section v-for="(item, index) in store.shoppingCart" :key="index">
        <div class="product">
          <div class="product-name">
            <div>{{ item.name }}</div>
            <div>
              {{ "$" + store.itemCost(index) }}
            </div>
          </div>
          <div>
            <button @click="store.addQuantity(item.id)">+</button>
            <div>{{ item.quantity }}</div>
            <button @click="store.decreaseQuantity(item.id)">-</button>
          </div>
          <button @click="store.removeItem(item.id)">clear</button>
        </div>
      </section>

      <div class="checkout">
        <div>{{ "$ " + store.totalPrise }}</div>
        <button @click="store.Checkout">結帳</button>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/shoppingCart";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const modal1 = ref();
const store = useCartStore();
const { shoppingCart } = storeToRefs(store);

function openModal() {
  const dialog = document.getElementById("modal1");

  dialog.showModal();
}

function closeModal(e) {
  const modal = modal1.value;
  if (e.target === modal) {
    modal.close();
  }
}

defineExpose({
  openModal,
  closeModal,
});
</script>

<style lang="scss" scoped>
.modal-container {
  flex-wrap: wrap;
  max-width: 1000px;
}
.product {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid black;
  padding: 10px;

  margin: 10px 0px;

  button,
  div {
    display: flex;
  }
}

.product-name {
  width: 10%;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
}

.checkout {
  display: flex;
  justify-content: end;
  width: 100%;

  div {
    margin-right: 23px;
  }
}
</style>
