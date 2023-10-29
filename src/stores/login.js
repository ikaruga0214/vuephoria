import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";
import { useRoute } from "vue-router";

const user = JSON.parse(localStorage.getItem("user"));

export const useLoginStore = defineStore("login", {
  state: () => {
    return { user: {}, isLogin: false, token: null };
  },

  actions: {
    getLogin() {
      if (this.email && this.id.length > 0) {
        this.isLogin = true;
      }
      axios.post("/");
    },

    getLogout() {
      this.isLogin = false;
      this.email = "";
      this.id = "";
      router.push("/");
    },
    async getUser() {
      axios
        .get(
          `https://back-end-tj0j.onrender.com/subscribers/65295165f2ffb972d5d08364`,
          {
            headers: { Authorization: `Bearer ${this.token}` },
          }
        )
        .then((res) => {
          this.email = res.data.email;
        });
    },
  },
});
