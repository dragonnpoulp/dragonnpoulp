import yaml from 'js-yaml';
import skillsYaml from './skills.yaml?raw';

export interface Skill {
	name: string;
	icon?: string;
	from: string;
	intro: string;
	tags?: string[];
}

const skills = yaml.load(skillsYaml) as Skill[];

export default skills;
