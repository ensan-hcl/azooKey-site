import { ViteSSG } from "vite-ssg";
import App from "./App.vue";

import Main from "./pages/Main.vue";
import {
	createWebHistory,
	type RouteRecordRaw,
	type RouterScrollBehavior,
} from "vue-router";

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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
	return { top: 0 };
};

export const createApp = ViteSSG(
	App,
	{
		routes,
		scrollBehavior,
	},
	({ app, router, initialState }) => {},
);
