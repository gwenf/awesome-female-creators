import Vue from "vue";
import "@inkline/inkline/dist/inkline.css";
import Inkline from "@inkline/inkline";
import "vue-search-select/dist/VueSearchSelect.css"

import App from "./App.vue";
import "./registerServiceWorker";

Vue.use(Inkline);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
