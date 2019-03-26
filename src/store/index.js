import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		async sayHelloWorld() {
			const {data} = await api.get(`/hello-world`);
			console.log(data);
		},
	},
});
