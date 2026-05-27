import type { PageServerLoad } from './$types';
import fs from "node:fs/promises";

export const load: PageServerLoad = async ({ params }) => {
	return {
		...JSON.parse((await fs.readFile(`data/${params.id}-resume.json`)).toString())
	};
}