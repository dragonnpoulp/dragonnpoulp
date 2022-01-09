import { ANGULAR, HASURA, MONGO, NET, NODEJS, ORACLE, POSTGRES, REACTJS } from './icons';

const skills = [
	{
		name: 'Learning',
		from: 'JUL-2017',
		intro: `<div>When I'd love a technology, I can read and learning about it. Sometime, accidentally, I have to learn something that I'm not willing to learn for work's requirement (for example: Java, Mathlab, Python).</div>`
	},
	{
		name: 'Mentoring',
		from: 'JUL-2017',
		intro: `<div>In projects, I can review the team mate's works like code, design. I always try to explain clearly to them if the works have any problem (for example: in code style, function flow, security issues).</div>`
	},
	{
		name: 'Problem solving',
		from: 'JUL-2017',
		intro: `<div>I work with teams to solve the problems. I will try with the standard way first by researching how the big company does it. But, it's not everytime, sometime rarely, I need to suggest with the team my self solution.</div>`
	},
	{
		name: `${HASURA}Hasura`,
		from: 'JUL-2017',
		intro: `<div>The most favourite backend technology that I'm working now. It helps me to build amazing GraphQL server, in a recorded time.</div>`,
		tags: ['js']
	},
	{
		name: `${NODEJS} NodeJS with serverless, microservices`,
		from: 'JUL-2017',
		intro: `<div>I have used NodeJS for many projects since 2017. I used library/frameworks likes: SailJS, ExpressJS, NextJS...</div>`,
		tags: ['js']
	},
	{
		name: `${REACTJS} ReactJS`,
		from: 'JUL-2017',
		intro: `<div>The first choise that I will use to build the Frontend application. I already work with some libraries like: emotion/styled-component, react-spring, material-ui, antd...</div>`,
		tags: ['js']
	},
	{
		name: `${ANGULAR}Angular 1.3`,
		from: 'JUL-2017',
		intro: `<div>I used this framework for the first modern web application project that called FPT.WebSmartCore. It brings me to Javascript, NodeJS ecosystem, and the open source world.</div>`
	},
	{
		name: `${ORACLE}Oracle`,
		from: 'JUL-2017',
		intro: `<div>I worked with this database about 8 years. I used it to design database, develop PL/SQL store procedures.</div>`,
		tags: ['.net']
	},
	{
		name: `${NET}C#.NET`,
		from: 'JUL-2017',
		intro: `<div>I used it to build a smart, flexible solution that we called FPT.SmartCore. It widely used in many projects in FPT Information System since clients can quickly see what you want after an hour or a day of development.</div>`,
		tags: ['.net']
	},
	{
		name: `${MONGO}MongoDB`,
		from: 'JUL-2017',
		intro: `<div>I used this technology in EXO Connect project, and then Flavorwiki.</div>`
	},
	{
		name: `${POSTGRES}Postgres`,
		from: 'JUL-2017',
		intro: `<div>I'm using it with my two last projects as the primary databases of Hasura GraphQL APIs.</div>`
	},
	{
		name: 'Others',
		from: 'JUL-2017',
		intro: `<div>I worked with many tools like Redis, RappidMQ, MySQL, Couchbase, Solr, Matlab, Adobe Flex...to build the complex architecture while developing the products.</div>`
	}
];

export default skills;
