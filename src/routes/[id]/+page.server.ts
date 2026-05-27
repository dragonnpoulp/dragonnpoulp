import type { PageServerLoad } from './$types';

const files = import.meta.glob('../../../data/*.json', {
  eager: true
});

export const load: PageServerLoad = async ({ params }) => {
	const module: any = files[`../../../data/${params.id}-resume.json`];
	return {
		...module
	};
}