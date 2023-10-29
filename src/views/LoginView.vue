<template>
  <div class="login-container">
    <div class="card-container">
      <h1 style="color: white">登入</h1>
      <div style="color: red">{{ errMessage }}</div>

      <form @submit="userLogin" id="myForm1">
        <section>
          <label style="color: white" for="email">Email</label>
          <input
            id="email"
            autocomplete="email"
            name="email"
            type="email"
            placeholder="請輸入信箱"
            size="30"
            v-model="userEmail"
            required
          />
        </section>

        <section>
          <label style="color: white" for="user-password">Password</label>
          <input
            id="user-password"
            autocomplete="user-password"
            name="user-password"
            type="password"
            placeholder="請輸入密碼"
            required
            v-model="userPassword"
          />
        </section>

        <button class="mybtn" @click="userLogin" type="submit">登入</button>
        <a>
          <button
            class="mybtn2"
            @click="() => router.push('/register')"
            type="button"
          >
            註冊
          </button>
        </a>

        <img v-if="isLoading" src="/Spinner.gif" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLoginStore } from "../stores/login";
import { useCartStore } from "../stores/shoppingCart";
import { useRouter } from "vue-router";
import axios from "axios";

const userEmail = ref("");
const userPassword = ref("");
const isLoading = ref(false);
const errMessage = ref("");
const router = useRouter();

const store = useLoginStore();
const cartStore = useCartStore();

const userLogin = (e) => {
  e.preventDefault();

  isLoading.value = true;

  axios({
    method: "POST",
    url: "https://vuephoria-backend.onrender.com/login/",
    data: {
      email: userEmail.value,
      password: userPassword.value,
    },
  })
    .then((res) => {
      if (res.data.token) {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        store.user = res.data.user;
        store.token = res.data.token;
        store.isLogin = true;
        router.push("/");
      }
    })
    .catch((err) => {
      console.error(err);
      isLoading.value = false;
      errMessage.value = err.response.data;
    });

  userEmail.value = "";
  userPassword.value = "";
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;

  font-family: poppins;
  background-color: #f1f1f1;
}

.card-container {
  position: relative;
  width: 950px;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #000435;

  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input:invalid {
  background-color: ivory;
  border: none;
  outline: 2px solid red;
  border-radius: 5px;
}

.mybtn {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.mybtn2 {
  background-color: orange;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.mybtn:hover,
.mybtn2:hover {
  opacity: 0.8;
}
</style>
