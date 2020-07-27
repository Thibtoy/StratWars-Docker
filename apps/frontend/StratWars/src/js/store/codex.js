import autodux from 'autodux'

export const {
	reducer,
	initial,
	actions: {
		setKind,
		setKinds,
		setType,
		setTypes,
		setUrlParams,
		addUnitData,
	},
	selectors: {
		getKind,
		getKindName,
		getKinds,
		getType,
		getTypeName,
		getTypes,
		getUnits,
	},
} = autodux ({
	slice: 'codex',
	actions: {
		addUnitData: (state, unitData) => {
			return state
		},
		setKind: (state, kind) => {
			if (!state.kinds) state.kinds = new Object()
			state.kinds[kind.name] = kind

			return state
		},
		setKinds: (state, kinds = false) => {
			if (kinds) {
				if (!state.kinds) state.kinds = new Object()
				kinds.forEach(kind => state.kinds[kind.name] = kind)			
			}
			else state.kinds = false

			return state
		},
		setType: (state, type) => {
			if (!state.types) state.types = new Object()
			state.types[type.name] = type

			return state
		},
		setTypes: (state, types = false) => {
			if (types) {
				if (!state.types) state.types = new Object()
				types.forEach(type => state.types[type.name] = type)			
			}
			else state.types = false

			return state
		},
		setUrlParams: (state, { kindName, typeName }) => {
			state.kindName = kindName
			state.typeName = typeName

			return state
		},
	},
	selectors: {
		getKind: (slice) => slice.kinds && slice.kinds[slice.kindName]? slice.kinds[slice.kindName] : false,
		getType: (slice) => slice.types && slice.types[slice.typeName]? slice.types[slice.typeName] : false
	},
	initial: {
		kindName: false,
		typeName: false,
		kinds: false,
		types: false,
		units: false,
	}
})