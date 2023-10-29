<template>
  <div class="grid-container">
    <div class="items cards" v-for="(item, index) in store.data" :key="index">
      <RouterLink :to="`/items/${index}`">
        <img :src="item.image" />
      </RouterLink>
      <div>
        <div>{{ item.name }}</div>
        <div>{{ "$" + item.cost }}</div>
        <div>{{ store.newItem }}</div>
        <button @click="addItem(index)">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import { useCartStore } from "../stores/shoppingCart";

const store = useDataStore();
const { addItem } = useCartStore();
</script>

<style scoped>
/* .grid-container {
  display: flex;
  flex-wrap: wrap;
  transition: 0.5s;
} */

.items img:hover {
  transform: scale(1.05);
  position: relative;
  z-index: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
  padding: 10px;
}

img {
  height: 300px;
  width: 300px;
  transition: 0.3s;
}

.items {
  padding: 15px;
  align-items: center;
  justify-content: center;
}

.cards {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 30px;
  background-color: aliceblue;
  margin-bottom: 8px;
}

/* .items {
  display: block;
} */

/* .item-container {
  display: inline-block;
  text-align: center;
} */
/* .responsive {
  display: block;
  padding: 0 6px;
  float: left;
  width: 24.99999%;
} */

#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
}
</style>
