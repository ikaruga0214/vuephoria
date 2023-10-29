<template>
  <form @submit.prevent="userLogin" id="myForm" ref="form">
    <h1 v-if="isLogin">HI, {{ store.email }}</h1>
    <h1 v-else>Sign In</h1>

    <section>
      <label for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        required
        v-model="userEmail"
      />
    </section>

    <section>
      <label for="user-password">Password</label>
      <input
        id="user-password"
        name="user-password"
        type="password"
        placeholder="password"
        required
        v-model="userPassword"
      />
    </section>

    <button @click="">Login</button>
    <button @click="store.getLogout" type="button">Logout</button>
  </form>
</template>
<script setup>
import { ref } from "vue";
import { useLoginStore } from "../stores/login";
import { storeToRefs } from "pinia";

const store = useLoginStore();
const { email, password, isLogin } = storeToRefs(store);
let userEmail = ref(email);
let userPassword = ref(password);

const userLogin = () => {
  store.getLogin();

  document.getElementById("myForm").reset();
};
</script>

<style scoped></style>
