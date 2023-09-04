import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import About from '~/components/about';
import Contact from '~/components/contact';
import Hero from '~/components/hero';
import Project from '~/components/project';

export default component$(() => {
	return (
		<>
			<Hero />
			<About />
			<Project />
			<Contact />
		</>
	);
});

export const head: DocumentHead = {
	title: 'Adrián Rebeles - Software Engineer',
	meta: [
		{
			name: 'author',
			content: 'Jesús Adrián Rebeles Nava',
		},
		{
			name: 'description',
			content:
				'Adrian Rebeles - Software Engineer +1 year experience.',
		},
		{
			name: 'keywords',
			content:
				'AdrianRebeles.dev, AdrianRebeles, AdrianRebelesdev, AdrianReb, Adrian Reb, Adrian Rebeles, AdrianReb Portafolio Web, AdrianReb software engineer, Adrian Rebeles Portafolio, Adrian Rebeles Portafolio Web, Adrian Rebeles Portafolio Web Fullstack',
		},
		{
			name: 'og:title',
			content: 'Adrián Rebeles - Software Engineer',
		},
		{
			name: 'og:description',
			content:
			'Adrian Rebeles - Software Engineer +3 year experience.',
		},
		{
			name: 'og:image',
			content: '/imgs/preview.webp',
		},
	],
};
