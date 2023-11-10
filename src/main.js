import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faUser,
  faBagShopping,
  faCircleInfo,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faUser, faBagShopping, faHeart, faCircleInfo, faCircleXmark);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
