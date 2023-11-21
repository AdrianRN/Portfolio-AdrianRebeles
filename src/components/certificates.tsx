import { component$ } from '@builder.io/qwik';


export default component$(() => {
	return (
		<section
			class='max-w-4xl mx-auto pt-10 md:flex-row gap-10'
			id='Certificates'
		>
			<h2 class='text-step-1 uppercase font-bold text-black dark:text-white mb-4 md:mb-2'>
				Certificates
			</h2>
            <img src="/imgs/az900.png" alt="AZ900 Certificate" />

		</section>
	);
});
