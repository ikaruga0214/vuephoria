<template>
  <div class="register-container">
    <div class="card-container">
      <form>
        <img v-if="isLoading" src="/Spinner.gif" />
        <div style="color: red">{{ errMessage }}</div>
        <section>
          <label for="email">EMAIL</label>
          <input
            id="email"
            type="email"
            size="30"
            placeholder="請隨意輸入一組信箱"
            v-model="userEmail"
          />
        </section>

        <section>
          <label for="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            size="30"
            placeholder="請隨意輸入一組密碼"
            v-model="userPassword"
          />
        </section>

        <button @click="userRegister">確定</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userEmail = ref();
const userPassword = ref();
const isLoading = ref(false);
const errMessage = ref();

const router = useRouter();

const userRegister = (e) => {
  e.preventDefault();

  if (userEmail.value && userPassword.value.length > 0) {
    isLoading.value = true;

    axios({
      method: "POST",
      url: "https://vuephoria-backend.onrender.com/register/",
      data: {
        email: userEmail.value,
        password: userPassword.value,
      },
    })
      .then((res) => {
        router.push("/login");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        isLoading.value = false;
        errMessage.value = err.response.data;
      });
  }

  userEmail.value = null;
  userPassword.value = null;
};
</script>

<style lang="scss" scoped>
.register-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
  z-index: 1;
  background-color: #f1f1f1;
}

.card-container {
  width: 950px;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #f4d4be;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
