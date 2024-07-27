export type Expertise = {
	id: number;
	title: string;
	subtitle: string;
	desc: string;
};

export type Experience = {
	id: number;
	companyName: string;
	position: string;
	location: string;
	desc: string;
	keyPoints: Array<string>;
};

export type ContactItem = {
	id: number;
	name: string;
	desc: string;
	url: string;
	icon: string;
};

export type GlobalData = {
	menuHomeName: string;
	menuExperienceName: string;
	menuContactName: string;
	expertises: Array<Expertise>;
	contactItems: Array<ContactItem>;
	experiences: Array<Experience>;
};

export const data: GlobalData = {
	// Menus
	menuHomeName: 'home',
	menuExperienceName: 'experience',
	menuContactName: 'contact',

	// Data
	expertises: [
		{
			id: 1,
			title: 'Javascript',
			subtitle: 'node.js, jQuery, react.js, alpine.js',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dicta deserunt ipsam non doloremque sunt ad facilis quisquam ea voluptas itaque velit, reiciendis error tempore officia eveniet totam deleniti?',
		},
		{
			id: 2,
			title: 'PHP',
			subtitle: 'Laravel, Wordpress',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dicta deserunt ipsam non doloremque sunt ad facilis quisquam ea voluptas itaque velit, reiciendis error tempore officia eveniet totam deleniti?',
		},
		{
			id: 3,
			title: 'Kotlin',
			subtitle: 'Android Native, Compose Multiplatform',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dicta deserunt ipsam non doloremque sunt ad facilis quisquam ea voluptas itaque velit, reiciendis error tempore officia eveniet totam deleniti?',
		},
		{
			id: 4,
			title: 'Dart',
			subtitle: 'Flutter',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dicta deserunt ipsam non doloremque sunt ad facilis quisquam ea voluptas itaque velit, reiciendis error tempore officia eveniet totam deleniti?',
		},
		{
			id: 5,
			title: 'SQL',
			subtitle: 'mySQL, postgreSQL',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dicta deserunt ipsam non doloremque sunt ad facilis quisquam ea voluptas itaque velit, reiciendis error tempore officia eveniet totam deleniti?',
		},
	],
	contactItems: [
		{
			id: 1,
			name: 'Email',
			desc: 'agus.mahasadhu@gmail.com',
			url: 'mailto:agus.mahasadhu@gmail.com',
			icon: '/assets/images/contacts/email.svg',
		},
		{
			id: 2,
			name: 'Whatsapp',
			desc: '+62-8990-1515-56',
			url: 'https://wa.me/628990151556',
			icon: '/assets/images/contacts/wa.svg',
		},
		{
			id: 2,
			name: 'Github',
			desc: '@mahasadhu',
			url: 'https://github.com/mahasadhu',
			icon: '/assets/images/contacts/github.svg',
		},
	],

	experiences: [
		{
			id: 1,
			companyName: 'Indodax',
			position: 'Lead Android Engineer',
			location: 'Bali, Indonesia (Hybrid)',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et inventore ducimus dolores facilis ullam, perferendis repudiandae magnam ex temporibus natus, saepe at? Inventore sunt numquam quaerat, est quam odio iure.',
			keyPoints: [
				'Lead Android engineer in all phases of software development lifecycle',
				'Architect, design, and implement maintainable Android Application',
				'Collaborate across division to define requirements',
				'Responsible to decisions related to Android App Performance',
				'Identify bugs with fellow engineer',
				'Mentor fellow Android engineer',
			],
		},
		{
			id: 2,
			companyName: 'Mapan',
			position: 'Senior L5 Android Engineer',
			location: 'Jakarta, Indonesia (Remote)',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et inventore ducimus dolores facilis ullam, perferendis repudiandae magnam ex temporibus natus, saepe at? Inventore sunt numquam quaerat, est quam odio iure.',
			keyPoints: [
				"Translate Product Manager's requirements into an actual working feature/functionality",
				'Challenge requirements to respective stakeholders to make sure that the feature/functionality is needed and achievable within the time frame',
				'Work closely with marketing and product teams to help them solve issues from a technical / software developer perspective',
				'Refactor major tech debt in the code base into a more loose-coupled and extendable code',
				'Grew junior engineers to improve their problem-solving skills, and help them to be able to write more descriptive and concise codes',
				'Help HR with the recruitment process in the technical interview phase',
				'Managed to achieve a 5/5 and 4/5 rating in performance review two times in a row',
			],
		},
		{
			id: 3,
			companyName: 'Dart',
			position: 'Fullstack Web and Android Developer | Technical Project Manager',
			location: 'Bali, Indonesia (Onsite)',
			desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et inventore ducimus dolores facilis ullam, perferendis repudiandae magnam ex temporibus natus, saepe at? Inventore sunt numquam quaerat, est quam odio iure.',
			keyPoints: [
				'Assigned as a Fullstack Developer to develop various apps requested by company’s clients.',
				'Assigned as a Project and Operational Manager to manage clients, create quotations, translate client’s requirements to technical specs, etc.',
				"Translates client's needs into an easily understandable technical specification documents for programmers / development team.",
				"Decides tech stack used in a project to ensure compatibility with client's needs and at the same time also provides ease of use for the programmers / development team.",
				'Creates work timeline.',
				'Helping programmers / development team solving their technical problems found in the ongoing projects.',
			],
		},
	],
};
