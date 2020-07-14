import autodux from 'autodux'

export const {
	reducer,
	initial,
	actions: {
		setAuthToken,
		setPseudo,
		setLogged,
	},
	selectors: {
		getAuthToken,
		getPseudo,
		getLogged,
	}
} = autodux({
	slice: 'me',
	initial: {
		authToken: null,
		pseudo: null,
		logged: false,
	}
})