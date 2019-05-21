import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import MemberIndex from "./views/member/MemberIndex.vue";
import MemberCreate from "./views/member/MemberCreate.vue";
import MemberEdit from "./views/member/MemberEdit.vue";

Vue.use(Router);

export default new Router({
	mode: `history`,
	base: process.env.BASE_URL,

	routes: [
		{
			path: `/`,
			name: `dashboard`,
			component: Dashboard
		},
		{
			path: `/login`,
			name: `login`,
			component: Login
		},
		{
			path: `/members`,
			name: `member.index`,
			component: MemberIndex
		},
		{
			path: `/members/create`,
			name: `member.create`,
			component: MemberCreate
		},
		{
			path: `/members/:id/edit`,
			name: `member.edit`,
			component: MemberEdit,
			props(route) {
				const props = { ...route.params };
				props.id = props.id ? +props.id : null;
				return props;
			},
		}
	]
});
