import { type QRL, component$ } from '@builder.io/qwik';
import HamburgerButton from '~/components/ui/hamburger-button';
import ModeSwitch from '~/components/ui/mode-switch';
import { Section } from '../header/header';

interface Props {
	showMenu: boolean;
	changeShowMenu: QRL<() => void>;
	isNameActive: string;
}

export default component$(({ showMenu, changeShowMenu, isNameActive }: Props) => {
	return (
		<nav class='px-5 sm:hidden flex flex-col gap-4 py-4'>
			<div class='flex justify-between'>
				<a title='IconoInicio' href='#inicio' class='text-black dark:text-white'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						class='w-7 h-7'
					>
						<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'>
							{'{ }'}
						</text>
					</svg>
				</a>
				<div class='flex justify-center items-center gap-5'>
					<ModeSwitch />
					<HamburgerButton showMenu={showMenu} changeShowMenu={changeShowMenu} />
				</div>
			</div>
			<div class={`h-screen ${showMenu ? '' : 'hidden'}`}>
				<ul class='flex flex-col justify-center items-center gap-6 font-medium text-black capitalize'>
					<li class='text-step-0 py-4 hover:text-blue-500'>
						<a
							title={Section.Home}
							href={`#${Section.Home}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Home
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Home}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.AboutMe}
							href={`#${Section.AboutMe}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.AboutMe
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.AboutMe}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.Projects}
							href={`#${Section.Projects}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.Projects
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.Projects}
						</a>
					</li>
					<li class='text-step-0 py-4'>
						<a
							title={Section.ContactMe}
							href={`#${Section.ContactMe}`}
							onClick$={changeShowMenu}
							class={`${
								isNameActive === Section.ContactMe
									? 'text-blue-500 dark:text-gray-400'
									: 'text-black dark:text-white'
							} hover:text-blue-500 dark:hover:text-gray-400`}
						>
							{Section.ContactMe}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
});
