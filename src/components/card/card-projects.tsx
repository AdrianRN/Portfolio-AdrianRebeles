import { component$ } from '@builder.io/qwik';
import { projects } from '~/data/seed';

export default component$(() => {
	return (
		<ul class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3' style='margin: 0; padding: 0;'>
			{projects
				.filter((project) => project.byMe)
				.sort(
					(a, b) => new Date(a.updatedAt).getFullYear() - new Date(b.createdAt).getFullYear()
				)
				.map((project, index) => (
					<li class='max-w-2xl' key={index}>
						<div class='mb-4 border bg-white dark:bg-dark-body dark:border-gray-600 relative flex items-center justify-between rounded-lg overflow-hidden hover:shadow'>
							<div class='p-4'>
								<h2 class='text-xl capitalize font-semibold text-black dark:text-white mb-2'>
									{project.title}
								</h2>

								<p class='text-gray-500 text-sm dark:text-gray-400 mb-4'>
									{project.description}
								</p>
								<div class='flex justify-center' >
								<img src={project.imageUrl} alt="" style={`max-height: ${project.tro ? '500px' : 'none'}`} />
								</div>
								<div class='flex justify-between items-center mt-4 gap-5'>
									<ul class='flex flex-wrap items-center gap-2'>
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
									<div class='flex justify-end items-center gap-2 capitalize'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											title='Github'
											class='hover:scale-125'
										>
											<img
												width={25}
												height={25}
												src='/icons/github.svg'
												alt='github'
												class='dark:filter dark:invert'
											/>
										</a>
										{project.websiteUrl && (
											<a
												href={project.websiteUrl}
												target='_blank'
												rel='noopener noreferrer'
												title='Live demo'
												class='hover:scale-125'
											>
												<img
													width={22}
													height={22}
													src='/icons/redirect.svg'
													alt='send'
													class='dark:filter dark:invert'
												/>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
});
