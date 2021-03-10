import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import { MdCard } from "vue-material/dist/components";
Vue.use(MdCard);
import "./plugins";
import "./utils/filter";
import "./utils/wwLogin";

Vue.config.productionTip = false;

new Vue({
  el: "#vue-admin-beautiful",
  router,
  store,
  render: (h) => h(App),
});
