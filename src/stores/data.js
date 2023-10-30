import axios from "axios";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => {
    if (localStorage.getItem("itemsData"))
      return JSON.parse(localStorage.getItem("itemsData"));
    return {
      data: [
        {
          _id: "6536e904ce60b909ac9d4696",
          name: "滑鼠",
          cost: 200,
          image: "mouse.jpg",
          description: "電競滑鼠rgb",
        },
        {
          _id: "6536e904ce60b909ac9d4697",
          name: "鍵盤",
          cost: 300,
          image: "keyboard.jpg",
          description: "老鍵盤",
        },
        {
          _id: "6536e904ce60b909ac9d4698",
          name: "車車",
          cost: 699,
          image: "lowrider.jpg",
          description: "lowrider",
        },
        {
          _id: "6536e904ce60b909ac9d4699",
          name: "curry",
          cost: 10,
          image: "curry.jpg",
          description: "YUMMY",
        },
        {
          _id: "6536e904ce60b909ac9d469a",
          name: "RTX-4090",
          cost: 2000,
          image: "rtx-4090.jpg",
          description: "好貴的",
        },
        {
          _id: "6536e904ce60b909ac9d469b",
          name: "firebird",
          cost: 3000,
          image: "pontiac-firebird.jpg",
          description: "經典老車車",
        },
        {
          _id: "6536e904ce60b909ac9d469c",
          name: "貓貓",
          cost: 300,
          image: "cat.jpg",
          description: "貓貓笑你",
        },
        {
          _id: "6536e904ce60b909ac9d469d",
          name: "吉他",
          cost: 300,
          image: "guitar.png",
          description: "Gibson les paul",
        },
        {
          _id: "6536e904ce60b909ac9d469e",
          name: "拉麵",
          cost: 300,
          image: "ramen.jpg",
          description: "真香警報",
        },
        {
          _id: "6536e904ce60b909ac9d469f",
          name: "機機人",
          cost: 300,
          image: "robot.jpg",
          description: "掃地機機人",
        },
        {
          _id: "6536e904ce60b909ac9d46a0",
          name: "特斯拉",
          cost: 300,
          image: "tesla.jpeg",
          description: "爆炸",
        },
      ],
    };
  },

  actions: {
    async getItems() {
      axios
        .get("https://vuephoria-backend.onrender.com/items/")
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
});
