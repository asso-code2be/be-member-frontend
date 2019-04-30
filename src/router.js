import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import MemberIndex from "./views/member/MemberIndex.vue";
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
			path: `login`,
			name: `login`,
			component: Login
		},
		{
			path: `members`,
			name: `member.index`,
			component: MemberIndex
		},
		{
			path: `members/:id/edit`,
			name: `member.edit`,
			component: MemberEdit,
			props: true
		}
	]
});