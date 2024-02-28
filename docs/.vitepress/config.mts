import { defineConfig } from 'vitepress';

export default defineConfig({
	title: '算法刷题与题解',
	base: '/encode-algorithms',
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
			{
				text: '通用',
				link: '/common/二分查找',
			},
		],

		sidebar: [
			{
				text: '简单',
				items: [
					{ text: '141. 环形链表', link: '/easy/141. 环形链表' },
					{ text: '202. 快乐数', link: '/easy/202. 快乐数' },
					{ text: '206. 反转链表', link: '/easy/206. 反转链表' },
					{ text: '704. 二分查找', link: '/easy/704. 二分查找' },
				],
			},
			{
				text: '中等',
				items: [
					{ text: '142. 环形链表 II', link: '/medium/142. 环形链表 II' },
					{ text: '92. 反转链表 II', link: '/medium/92. 反转链表 II' },	
				]
			},
			{
				text: '困难',
				items: [
					{ text: '25. K 个一组翻转链表', link: '/hard/25. K 个一组翻转链表' },
				]
			},
			{
				text: '通用',
				items: [
					{ text: '二分查找', link: '/common/二分查找' },
				]
			},
		],
	},
});
