import {
	ANGULAR,
	GRAPHQL,
	HASURA,
	MONGO,
	MYSQL,
	NET,
	NEXTJS,
	NODEJS,
	ORACLE,
	POSTGRES,
	REACTJS
} from './icons';

const projects = [
	{
		name: 'SoBanHang',
		at: 'Finan',
		role: 'Technical Architect, Freelancer',
		techStack: [NODEJS, REACTJS, NEXTJS].join(''),
		tags: ['js'],
		from: 'June 2021',
		to: 'now'
	},
	{
		name: 'Flavorwiki',
		at: 'Flavorwiki',
		techStack: [GRAPHQL, MONGO, NODEJS, REACTJS].join(''),
		role: 'Senior Software Architect, Freelancer',
		from: 'May 2020',
		to: 'November 2020',
		tags: ['js']
	},
	{
		name: 'Powersell.net',
		at: 'Datamart Solutions',
		role: 'Technical Leader',
		from: '2017',
		to: '2018',
		tags: ['js'],
		techStack: [NODEJS, MYSQL].join('')
	},
	{
		name: 'EXO Connect',
		at: 'NFQ Asia',
		role: 'Full-stack Software Engineer',
		from: '2018',
		to: 'June 2019',
		tags: ['js'],
		techStack: [GRAPHQL, MONGO, NODEJS, REACTJS].join('')
	},
	{
		name: 'School Attendance System',
		techStack: [GRAPHQL, HASURA, POSTGRES, NODEJS, REACTJS].join(''),
		at: '',
		role: 'Solo Developer',
		tags: ['js'],
		from: 'Jan 2021',
		to: 'now'
	},
	{
		name: 'Magikpic',
		techStack: [GRAPHQL, HASURA, POSTGRES, NODEJS, REACTJS].join(''),
		at: '',
		role: 'Solo Developer',
		tags: ['js'],
		from: 'May 2021',
		to: 'now'
	},
	{
		name: 'FPT.SmartCore',
		techStack: [ANGULAR, NET, ORACLE].join(''),
		at: 'FPT Information System',
		role: 'Technical Leader',
		from: '2010',
		to: 'July 2017',
		tags: ['.net']
	},
	{
		name: 'FPT.WebSmartCore',
		techStack: [NET, ORACLE].join(''),
		at: 'FPT Information System',
		role: 'Technical Leader',
		from: 'July 2017',
		to: 'March 2018'
	},
	{
		name: 'Live securities price board',
		techStack: [NET, ORACLE].join(''),
		at: 'FPT Information System',
		role: 'Full-stack Software Engineer',
		from: 'January 2009',
		to: 'September 2009'
	},
	{
		name: 'APEC Securities Online Trading System',
		techStack: [
			'<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Adobe_Flex_Logo.svg"/>',
			NET,
			ORACLE
		].join(''),
		at: 'FPT Information System',
		role: 'Full-stack Software Engineer',
		from: '2009',
		to: '2010'
	}
];

export default projects;
