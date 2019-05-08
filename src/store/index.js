import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membersList: [
			{
				id: 1,
				firstname: 'Thierry',
				lastname: 'Fleury',
				emailadress: 'Thierry.Fleury@code2be.fr'
			},
			{
				id: 2,
				firstname: 'Benoît',
				lastname: 'Vrignault',
				emailadress: 'Benoît.Vrignault@code2be.fr'
			},
			{
				id: 3,
				firstname: 'Laurent',
				lastname: 'Angibaud',
				emailadress: 'Laurent.Angibaud@code2be.fr'
			},
			{
				id: 4,
				firstname: 'Sébastien',
				lastname: 'François',
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
