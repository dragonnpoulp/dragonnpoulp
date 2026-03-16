import yaml from 'js-yaml';
import historyYaml from './history.yaml?raw';
import companiesYaml from './companies.yaml?raw';

export interface Company {
	id: string;
	name: string;
	link: string;
}

export interface HistoryItem {
	role: string;
	company: string;
	link: string;
	from: string;
	to: string;
	tags: string[];
}

const companies = yaml.load(companiesYaml) as Company[];
const historyRaw = yaml.load(historyYaml) as any[];

const companyMap = new Map(companies.map(c => [c.id, c]));

const history: HistoryItem[] = historyRaw.map(item => {
	const company = companyMap.get(item.company);
	return {
		role: item.role,
		company: company?.name ?? item.company,
		link: company?.link ?? '',
		from: item.from,
		to: item.to,
		tags: item.tags
	};
});

export default history;
