import { component$ } from '@builder.io/qwik';
import { projects } from '~/data/seed';

export default component$(() => {
	return (
		<div>
			<ol class='flex-1 relative border-l border-gray-200 dark:border-gray-700'>
				{projects
					.filter((project) => !project.byMe)
					.map((project) => (
						<li class='mb-10 ml-4' key={project.title}>
							<div class='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
							<div>
								<time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
									{project.createdAt}
								</time>
								<span class='text-sm text-gray-400 dark:text-gray-500'> - </span>
								<time class='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
									{project.updatedAt}
								</time>
							</div>
							<h3 class='text-step-0 font-semibold text-gray-900 dark:text-white'>
								{project.title} <span style="color: #2190eb" class='text-sm'>{project.titlePlus}</span>
							</h3>
							<p class='mb-2 text-step--1 font-normal text-gray-500 dark:text-gray-400'>
								{project.description}
							</p>
							<ul class='flex flex-wrap items-center gap-3'>
								{project.technologies.map((technology) => (
									<li key={technology}>
										<img
											width={20}
											height={20}
											src={`/icons/${technology.toLowerCase()}.svg`}
											alt={technology}
											title={technology}
										/>
									</li>
								))}
							</ul>
						</li>
					))}
			</ol>
		</div>
	);
});
