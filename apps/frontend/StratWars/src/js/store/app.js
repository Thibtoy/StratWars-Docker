import autodux from 'autodux'

export const {
	reducer,
	initial,
	actions: {
		setModale,
	},
	selectors: {
		getModale,
	},
} = autodux ({
	slice: 'app',
	initial: {
		modale: false,
	}
})