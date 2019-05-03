import Vue from "vue";
import './plugins/vuetify';
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store/index";

Vue.use(Vuex);
Vue.config.productionTip = false;

const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount(`#app`);

import 'vuetify/dist/vuetify.min.css';