export const abilities: {
	name: string;
	type: 'Frontend' | 'Backend' | 'DataBase' | 'QA Testing' | 'Version Control';
	level: 'Básico' | 'Intermedio' | 'Avanzado';
	icon: string;
}[] = [
	{
		name: 'Angular',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'html5',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'css3-alt',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'js',
	},
	{
		name: 'TailwindCss',
		type: 'Frontend',
		level: 'Avanzado',
		icon: '',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'bootstrap',
	},
	{
		name: 'NodeJs',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'laravel',
	},

	{
		name: 'ExpressJs',
		type: 'Backend',
		level: 'Avanzado',
		icon: 'node-js',
	},
	{
		name: 'MySQL',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MongoDB',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'SqlServer',
		type: 'DataBase',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Selenium',
		type: 'QA Testing',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Jest',
		type: 'QA Testing',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Git',
		type: 'Version Control',
		level: 'Intermedio',
		icon: '',
	}

];

export const projects = [
	{
		title: `Jr. Consultant`,
		titlePlus: '(Front end & QA Engineer)',
		description:
			'Front-end developer, collaborating within a team to create engaging user interfaces, while in another team as a QA Engineer, I ensure the seamless functionality and quality of the software product through rigorous testing and analysis. For the company AXEN IT Consulting.',
		technologies: ['React', 'TypeScript', 'NodeJs', 'TailwindCss', 'Git', 'Selenium', 'Azure'],
		imageUrl: '#',
		githubUrl: '#',
		websiteUrl: '#',
		createdAt: '2023',
		updatedAt: 'Current',
		byMe: false,
	},
	{
		title: 'Fullstack Developer',
		titlePlus: '',
		description:
			'Development and maintenance of modules and Restful APIs in different web applications for the company Métrica Móvil.',
		technologies: ['Angular', 'TypeScript', 'NodeJs', 'ExpressJs', 'Bootstrap', 'Git', 'GCP'],
		imageUrl: '#',
		githubUrl: '#',
		websiteUrl: '#',
		updatedAt: `2023`,
		createdAt: `2022`,
		byMe: false,
	},
	{
		title: 'Countries App',
		description:
			'Meet Countries sleek web app for instant country exploration. Search by region, country, or capital. Effortless globe-trotting at your fingertips',
		technologies: ['Angular', 'TypeScript', 'TailwindCss'],
		imageUrl: '/imgs/CountryApp.png',
		githubUrl: 'https://github.com/AdrianRN/countries-app-angular',
		websiteUrl: 'https://countries-app-adrianrn.vercel.app/',
		createdAt: '',
		updatedAt: '',
		byMe: true,
	},
	{
		title: 'SpotiApp',
		description:
			'Embark on a musical journey like never before with SpotiApp, a cutting-edge web application meticulously developed. Seamlessly integrated with the Spotify API, SpotiApp empowers you to explore the latest music releases, delve into artist profiles, and discover the sounds that resonate with your soul.',
		technologies: ['Angular', 'TypeScript', 'Bootstrap', 'NodeJS'],
		imageUrl: '/imgs/spotiApp.png',
		githubUrl: 'https://github.com/AdrianRN/spoti-app-angular',
		websiteUrl: 'https://adrianrn.github.io/spoti-app-angular/#/home',
		createdAt: '',
		updatedAt: '',
		byMe: true,
	},
	{
		title: 'To-Do App',
		description:
			'Experience the epitome of task management with this To-Do App. Built using the dynamic duo of React and Tailwind CSS, To-Do App revolutionizes your productivity by providing a sleek, intuitive, and customizable platform for managing your tasks during the day.',
		technologies: ['React', 'JavaScript', 'TailwindCss'],
		imageUrl: '/imgs/todoList.png',
		githubUrl: 'https://github.com/AdrianRN/todolist-react',
		websiteUrl: 'https://adrianrn.github.io/todolist-react/',
		createdAt: '2022-10-12',
		updatedAt: '2022-12-12',
		byMe: true,
	},
	{
		title: 'GifExpertApp',
		description:
			'Introducing "GifExpertApp" – your go-to React-powered app for quick and fun gif searches. Effortlessly explore a vast collection with a simple search interface. Instantly discover and share the perfect gifs!',
		technologies: ['React', 'JavaScript'],
		imageUrl: '/imgs/GifExpertApp.png',
		githubUrl: 'https://github.com/AdrianRN/react-gif-expert',
		websiteUrl: 'https://react-gif-expert-eight.vercel.app/',
		createdAt: '2022-10-12',
		updatedAt: '2022-12-12',
		byMe: true,
	},
	{
		title: 'Node RestServer ExpressJS',
		description:
			'Discover our cutting-edge RESTful API, blending Node.js, Express.js, and MongoDB for secure and user-friendly experiences. Traditional and JWT authentication ensure confident interactions and enhanced security. Redefining API development with seamless integration and advanced protection.',
		technologies: ['NodeJs', 'ExpressJs', 'MongoDB'],
		imageUrl: '/imgs/nodeApi.png',
		githubUrl: 'https://github.com/AdrianRN/node-restserver-express',
		websiteUrl: '',
		createdAt: '2022-10-12',
		updatedAt: '2022-12-12',
		tro: true,
		byMe: true,
	},
];

export const socials = [
	{
		title: '@AdrianRebeles',
		href: 'https://www.linkedin.com/in/jes%C3%BAs-adri%C3%A1n-rebeles-nava-6417b3257/',
		icon: 'linkedin',
	},
	{
		title: 'adrian.rebeles@outlook.com',
		href: 'mailto:adrian.rebeles@outlook.com',
		icon: 'outlook',
	},
	{
		title: '@AdrianRN ',
		href: 'https://github.com/AdrianRN',
		icon: 'github',
	},
];

export const InitialStateContactForm = {
	name: '',
	email: '',
	message: '',
};