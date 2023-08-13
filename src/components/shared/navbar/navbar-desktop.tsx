import { component$ } from '@builder.io/qwik';

import { Section } from '../header/header';
import ModeSwitch from '~/components/ui/mode-switch';

interface Props {
	isNameActive: string;
}

export default component$(({ isNameActive }: Props) => {
	return (
		<nav class='hidden py-1 px-5 mx-auto sm:flex justify-between items-center max-w-4xl'>
			<a title='home' href='#home' class='hover:scale-110'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					class='w-7 h-7 text-black dark:text-white'
				>
					<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'>
							{'{ }'}
						</text>
				</svg>
			</a>
			<ul class='flex gap-4 text-sm items-center font-medium '>
				<li class='py-4'>
					<a
						title={Section.Home}
						href={`#${Section.Home}`}
						class={`${
							isNameActive === Section.Home
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Home}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.AboutMe}
						href={`#${Section.AboutMe}`}
						class={`${
							isNameActive === Section.AboutMe
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.AboutMe}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.Projects}
						href={`#${Section.Projects}`}
						class={`${
							isNameActive === Section.Projects
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.Projects}
					</a>
				</li>
				<li class='py-4'>
					<a
						title={Section.ContactMe}
						href={`#${Section.ContactMe}`}
						class={`${
							isNameActive === Section.ContactMe
								? 'text-blue-500 dark:text-gray-400'
								: 'text-black dark:text-white'
						} hover:text-blue-500 dark:hover:text-gray-400`}
					>
						{Section.ContactMe}
					</a>
				</li>
				<li class='py-4'>
					<ModeSwitch />
				</li>
			</ul>
		</nav>
	);
});
