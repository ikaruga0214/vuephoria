<template>
  <div class="grid-container">
    <div class="box">
      <div class="items cards" v-for="(item, index) in store.data" :key="index">
        <div class="item-thumb">
          <RouterLink :to="`/items/${item._id}`" :key="item._id">
            <img :src="item.image" :key="item._id" />
          </RouterLink>
        </div>
        <div class="card-bottom">
          <div>{{ item.name }}</div>
          <div>{{ "$" + item.cost }}</div>
          <div>{{ store.newItem }}</div>
          <button @click="addItem(index)">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useDataStore } from "../stores/data";
import { useCartStore } from "../stores/shoppingCart";
import axios from "axios";

const store = useDataStore();
const { addItem } = useCartStore();

const getItems = () => {
  axios
    .get("http://localhost:3001/items/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

onMounted(() => {
  // store.getItems();
});
</script>

<style lang="scss" scoped>
/* .grid-container {
  display: flex;
  flex-wrap: wrap;
  transition: 0.5s;
} */

.box {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 15px;
}

.items img:hover {
  transform: scale(1.05);
  position: relative;
  z-index: 0;
}

.grid-container {
  background-color: #f1f1f1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 1 0 auto;

  @media (max-width: 750px) {
    min-height: 100vh;
  }
}

img {
  height: 100%;
  width: 100%;
  transition: 0.3s;

  object-fit: fill;
}

.items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: calc(100% / 3 - 10px);
  max-height: 250px;
  margin: 5px 5px 0 5px;

  @media (max-width: 750px) {
    width: 100%;
  }
}

.item-thumb {
  width: 100%;
  height: 50%;
  text-align: center;
  overflow: hidden;
  border-top-right-radius: 10%;
  border-top-left-radius: 10%;
}

.cards {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  background-color: aliceblue;

  .card-bottom {
    height: 50%;
    width: 100%;
    border-top: groove 1px black;
    text-align: center;
  }
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
