import { defineStore } from "pinia";
import { useDataStore } from "./data";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => {
    return { shoppingCart: [] };
  },
  getters: {
    itemCost: (state) => {
      return (index) =>
        state.shoppingCart[index].cost * state.shoppingCart[index].quantity;
    },

    totalQuantity: (state) => {
      return state.shoppingCart
        .map((item) => item.quantity)
        .reduce((item, i) => item + i, 0);
    },

    totalPrise: (state) => {
      return state.shoppingCart
        .map((item) => item.cost * item.quantity)
        .reduce((item, i) => item + i, 0);
    },
  },
  actions: {
    addItem(index) {
      const data = useDataStore();
      const item = this.shoppingCart.find(
        (item) => item.id === data.data[index]._id
      );
      if (!item) {
        this.shoppingCart.push({
          name: data.data[index].name,
          cost: data.data[index].cost,
          id: data.data[index]._id,
          quantity: 1,
        });
      } else {
        item.quantity++;
      }
    },
    addQuantity(id) {
      const item = this.shoppingCart.find((item) => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity++;
      } else if ((item.quantity = 0)) {
        this.shoppingCart.filter((item) => this.shoppingCart.id !== item.id);
      }
    },
    decreaseQuantity(id) {
      const item = this.shoppingCart.find((item) => item.id === id);

      if (item && item.quantity >= 1) {
        item.quantity--;
        if (item.quantity <= 0) {
          this.shoppingCart = this.shoppingCart.filter((item) => {
            return item.id !== id;
          });
        }
      }
    },
    removeItem(id) {
      this.shoppingCart = this.shoppingCart.filter((item) => item.id !== id);
    },
    saveUserCart() {
      localStorage.setItem("cart", JSON.stringify(this.shoppingCart));
    },
    Checkout() {
      const userItems = this.shoppingCart.map((item) => {
        return {
          id: item.id,
          name: item.name,
          cost: item.cost,
          quantity: item.quantity,
        };
      });
      console.log(userItems);

      axios({
        method: "POST",
        url: "https://vuephoria-backend.onrender.com/create-checkout-session/",
        data: { userItems: userItems },
      })
        .then((res) => (window.location = res.data.url))
        .catch((err) => console.log(err));
    },
  },
});
