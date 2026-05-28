import type { PageServerLoad } from './$types';

const files = import.meta.glob('../../../data/*-jd.txt', {
	eager: true
});

export const load: PageServerLoad = async ({ params }) => {
	return {
		resumeIds: Object.keys(files)
			//.filter((file) => file.endsWith('jd.txt'))
			.map((file) => file.replace('../../../data/', '').replace('-jd.txt', ''))
	};
};
