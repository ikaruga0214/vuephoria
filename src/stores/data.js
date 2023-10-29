import axios from "axios";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => {
    if (localStorage.getItem("itemsData"))
      return JSON.parse(localStorage.getItem("itemsData"));
    return { data: [] };
  },

  actions: {
    async getItems() {
      axios
        .get("https://vuephoria-backend.onrender.com/items/")
        .then((res) => {
          console.log(res);
          this.data = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
});
