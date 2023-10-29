<template>
  <!-- <div class="out-container">
    <div>
      <input type="file" @change="uploadFile" name="file" />
      <button @click="asyncUP">UPLOAD</button>
    </div>
    <div class="icon-container">
      <img v-if="imageUrl" :src="imageUrl" alt="preview" />
    </div>
    <button @click="getData">ac</button>
  </div> -->
  <div class="out-container">
    <div class="icon-container">
      <img id="rex" :src="imageUrl" />
    </div>
    <form method="post" enctype="multipart/form-data">
      <input type="file" name="file" @change="uploadFile" />
      <button @click.prevent="asyncUP">上傳</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";

import { useRouter } from "vue-router";
import { onBeforeMount, onMounted, ref, computed, onUpdated } from "vue";
import { storage } from "../../firebase";
import { ref as gsRef, getDownloadURL } from "firebase/storage";
import { useLoginStore } from "../stores/login";

const router = useRouter();
const store = useLoginStore();
const imageUrl = ref();
const userFile = ref();

const refreshPage = () => {
  router.go();
};

const uploadFile = (e) => {
  userFile.value = e.target.files[0];
  console.log(userFile.value);
};

const asyncUP = () => {
  const formData = new FormData();
  const newFileName = `${store.user.id} + ${userFile.value.name} `;
  formData.append("file", userFile.value, `${store.user.id}.jpg`);

  axios({
    method: "POST",
    url: "https://vuephoria-backend.onrender.com/newimage/",

    data: formData,
  })
    .then(() => {
      gsUrl();
    })
    .catch((err) => console.log(err));
};

const gsUrl = () => {
  getDownloadURL(gsRef(storage, `${store.user.id}.jpg`))
    .then((url) => {
      const img = document.getElementById("rex");
      imageUrl.value = url;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getData = async () => {
  try {
    const buffer = await axios.get(
      "https://vuephoria-backend.onrender.com/users/65340f844f034919cd5bfd00/avatar/",
      { responseType: "blob" }
    );

    console.log(buffer.data);
    const url = window.URL.createObjectURL(buffer.data);
    imageUrl.value = url;
    console.log(imageUrl.value);
  } catch (err) {
    console.log(err);
  }
};

onBeforeMount(() => {
  // getData();
  gsUrl();
});

// try {
//   const res = axios.post("/", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   imageUrl = res.data.imageUrl;
// } catch (err) {
//   console.error(err);
// }
</script>

<style lang="scss" scoped>
.out-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  text-align: center;
}

.icon-container {
  display: flex;
  max-height: 70%;
  justify-content: center;
  margin: 18px 0;
  img {
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  }
}
</style>
