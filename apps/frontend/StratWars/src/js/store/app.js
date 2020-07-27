import autodux from 'autodux'

export const {
	reducer,
	initial,
	actions: {
		init,
		addAxiosAuth,
		setAxiosInstance,
		setModale,
	},
	selectors: {
		getAxiosInstance,
		getModale,
	},
} = autodux ({
	slice: 'app',
	actions: {
		init: state => state,
		addAxiosAuth: (state, token = null) => {
			state.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
			return state
		}
	},
	initial: {
		axiosInstance: false,
		modale: false,
	}
})