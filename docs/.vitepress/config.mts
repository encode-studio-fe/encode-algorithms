import { defineConfig } from 'vitepress';

export default defineConfig({
	title: '算法刷题与题解',
	base: '/algorithms-share/',
	themeConfig: {
		logo: '/avatar.png',
		nav: [
			{ text: '实战介绍', link: '/' },
			{
				text: 'easy',
				link: '/easy/141. 环形链表',
			},
			{
				text: '中等',
				link: '/medium/142. 环形链表 II',
			},
			{
				text: '困难',
				link: '/hard/25. K 个一组翻转链表',
			},
		],

		sidebar: [
			{
				text: 'easy',
				items: [
					{ text: '141. 环形链表', link: '/easy/141. 环形链表' },
				],
			},
			{
				text: '中等',
				items: [
					{ text: '142. 环形链表 II', link: '/medium/142. 环形链表 II' },
				]
			},
			{
				text: '困难',
				items: [
					{ text: '25. K 个一组翻转链表', link: '/hard/25. K 个一组翻转链表' },
				]
			},
		],
	},
});
