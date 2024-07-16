import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = (event) => {
	return {
		user: event.locals.user
	};
};

export const actions = {
	logout: async (event) => {
		event.cookies.delete('sessionid', { path: '/' });
		event.locals.user = null;
	}
} satisfies Actions;
