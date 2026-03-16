import yaml from 'js-yaml';
import projectsYaml from './projects.yaml?raw';
import companiesYaml from './companies.yaml?raw';
import { icons } from '../icons';

export interface Project {
	name: string;
	at: string;
	role: string;
	techStack: string;
	tags: string[];
	from: string;
	to: string;
}

interface ProjectRaw {
	name: string;
	company?: string;
	role: string;
	stacks: string[];
	tags?: string[];
	from: string;
	to: string;
}

const companies = yaml.load(companiesYaml) as { id: string; name: string }[];
const projectsRaw = yaml.load(projectsYaml) as ProjectRaw[];

const companyMap = new Map(companies.map(c => [c.id, c.name]));

const projects: Project[] = projectsRaw.map(item => ({
	name: item.name,
	at: item.company ? companyMap.get(item.company) ?? '' : '',
	role: item.role,
	techStack: item.stacks.map(s => `<img src="${icons[s.toLowerCase()] ?? ''}"/>`).join(''),
	tags: item.tags ?? [],
	from: item.from,
	to: item.to
}));

export default projects;
