import { component$ } from '@builder.io/qwik';
import Experience from './experience';

export default component$(() => {
	return (
		<div class='md:flex-1'>
			<br /><br />
			<h2 class='text-step-1 mb-4 text-black uppercase font-bold border-gray-500 dark:border-gray-100 dark:text-white'>
			👋 About me
			</h2>
			<p class='mb-4 text-gray-800 dark:text-white'>
				Software engineer with over +2 years of experience as web developer.
			</p>
			<p class='mb-4 text-gray-900 font-semibold dark:text-gray-400'>
				My goal is to create products that offer exceptional experiences, blending attractive, intuitive, and high-quality design.
			</p>
			<p class='mb-4 text-gray-800 dark:text-white'>
				I am always eager to learn new technologies and take on fresh work challenges that allow me to continue growing professionally.
			</p>
			<br />
			<Experience />
			<br /><br />
		</div>
	);
});
