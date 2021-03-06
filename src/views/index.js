import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import Schedule from '@/views/SchedulePage.vue';
import Speakers from '@/views/SpeakersPage.vue';
import Blog from '@/views/BlogPage.vue';
import Ambassador from '@/views/AmbassadorPage.vue';

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/speakers',
		name: 'Speakers',
		component: Speakers,
	},
	{
		path: '/schedule',
		name: 'Schedule',
		component: Schedule,
	},
	{
		path: '/blog',
		name: 'Blog',
		component: Blog,
	},
	{
		path: '/join',
		name: 'Ambassador',
		component: Ambassador,
	}
];

const router = createRouter({
	history: createWebHashHistory('/'),
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	}
});

export default router;