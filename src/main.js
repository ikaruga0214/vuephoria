import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowUp,
  faHouse,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const pinia = createPinia();
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
library.add(faArrowUp, faHouse, faUser, faGithub, faCartShopping);

app.use(router);
app.use(pinia);
app.mount("#app");

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("itemsData", JSON.stringify(state.data));
  },
  { deep: true }
);
