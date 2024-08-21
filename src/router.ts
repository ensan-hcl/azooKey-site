import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from "vue-router";
import Main from "./pages/Main.vue";

export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/Contact",
		name: "Contact",
		component: () => import("./pages/Contact.vue"),
	},
	{
		path: "/PrivacyPolicy",
		name: "PrivacyPolicy",
		component: () => import("./pages/PrivacyPolicy.vue"),
	},
	{
		path: "/TermsOfService",
		name: "TermsOfService",
		component: () => import("./pages/TermsOfService.vue"),
	},
	{
		path: "/CustomTabs",
		name: "CustomTabs",
		component: () => import("./pages/CustomTabs.vue"),
	},
	{
		path: "/OpenSource",
		name: "OpenSource",
		component: () => import("./pages/OpenSource.vue"),
	},
	{
		path: "/QA",
		name: "QA",
		component: () => import("./pages/QA.vue"),
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});
