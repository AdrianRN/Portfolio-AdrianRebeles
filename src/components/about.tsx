import { component$ } from '@builder.io/qwik';
import AboutDescription from './about-description';
import Skills from './skills';
import Certificates from './certificates';

export default component$(() => {
	return (
		<section
			class='px-5 max-w-4xl mx-auto pt-10 md:flex-row gap-10'
			id='About me'
		>
			<AboutDescription />
			<Skills />
			<Certificates />
		</section>
	);
});
