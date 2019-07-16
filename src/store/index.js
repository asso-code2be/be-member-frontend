import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== `production`,

	state: {
		members: [
			{
				id: 1,
				firstname: `Fleury`,
				lastname: `Thierry`
			},
			{
				id: 2,
				firstname: `Vrignault`,
				lastname: `Benoît`
			},
			{
				id: 3,
				firstname: `Angibaud`,
				lastname: `Laurent`
			},
			{
				id: 4,
				firstname: `François`,
				lastname: `Sébastien`
			}
		],

		member: {
			id: 2,
			firstname: `Vrignault`,
			lastname: `Benoît`
		},

		auth: {
			user: null
		}
	},

	getters: {
		getMemberById: (state) => (id) => {
			return state.members.find(m => m.id === id);
		},
		getMembers: (state) => {
			return state.members;
		},
	},

	mutations: {
		SET_MEMBERS_LIST(state, list) {
			state.members = list;
		},

		CREATE_MEMBER(state, member) {
			state.members.push(member);
		},

		UPDATE_MEMBER(state, member) {
			const test = state.members.find(m => m.id === member.id);
			Object.assign(test, member);
		},

		DELETE_MEMBER(state, id) {
			// todo: delete from database and state.members
		}
	},

	actions: {
		async fetchMembers({commit}) {
			const {data} = await api.get(`/members`);
			commit(`SET_MEMBERS_LIST`, data);
		},

		async createMember({commit}, member) {
			commit(`CREATE_MEMBER`, member);
		},

		async updateMember({commit}, member) {
			commit(`UPDATE_MEMBER`, member);
		},

		async deleteMemberById({commit}, id) {
			commit(`DELETE_MEMBER`, id);
		},

		async authAttempt({commit}, credentials) {
			// todo : submit credentials => store the user using a mutation on auth.user
		},
	},
});
