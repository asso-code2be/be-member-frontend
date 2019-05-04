import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membersList: [
			{
				id: 1,
				firstname: 'Fleury',
				lastname: 'Thierry',
				emailadress: 'Thierry.Fleury@code2be.fr'
			},
			{
				id: 2,
				firstname: 'Vrignault',
				lastname: 'Benoît',
				emailadress: 'Benoît.Vrignault@code2be.fr'
			},
			{
				id: 3,
				firstname: 'Angibaud',
				lastname: 'Laurent',
				emailadress: 'Laurent.Angibaud@code2be.fr'
			},
			{
				id: 4,
				firstname: 'François',
				lastname: 'Sébastien',
				emailadress: 'Sébastien.François@code2be.fr'
			}
		]
	},
	mutations: {
		SET_MEMBERS_LIST(state, list) {
			state.membersList = list;
		}
	},
	actions: {
		async getAllMembers({ commit }) {
			const { data } = await api.get('/members');
			commit('SET_MEMBERS_LIST', data);
		},
		async sayHelloWorld() {
			const { data } = await api.get(`/hello-world`);
			console.log(data);
		},
	},
});
