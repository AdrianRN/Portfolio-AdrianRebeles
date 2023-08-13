import { component$ } from '@builder.io/qwik';
import FormContact from './form/form-contact';
import Alert from './ui/alert';
import { Lottie } from './lottie/lottie';

export default component$(() => {
	return (
		<section class='relative' id='Contact me'>
			<div class='px-5 max-w-4xl mx-auto py-10 flex flex-col gap-2'>
				<div class='md:flex md:gap-10'>
					<div class='hidden flex-1 md:flex md:flex-col'>
						<h2 class='text-step-1 uppercase mb-2 text-black dark:text-white font-bold'>
							Contact me
						</h2>
						<p class='text-gray-500 dark:text-gray-400 mb-2'>
						Do you have a project you want to discuss? Do not hesitate to contact me!
						</p>
						
						<Lottie idContainer='contact' path='contact' class='hidden sm:flex flex-1 w-80' />
					</div>
					<div class='flex-1'>
						<h2 class='flex-initial md:hidden text-step-1 uppercase mb-2 text-black dark:text-white font-bold'>
						Contact me
						</h2>
						<p class='flex-initial md:hidden mb-4 text-gray-700 dark:text-gray-400'>
						Do you have a project you want to discuss? Do not hesitate to contact me!
						</p>
						
						<FormContact />
					</div>
				</div>
			</div>
			<Alert>
				<span q:slot='title'>Thanks for contacting me!</span>
				<span q:slot='message'>I'll answer you ASAP.</span>
			</Alert>
		</section>
	);
});
