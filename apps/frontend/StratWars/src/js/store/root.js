import { combineReducers } from 'redux'
import { reducer as app } from './app'
import { reducer as me } from './me'
import { reducer as codex } from './codex'


const createRootReducer = combineReducers({
	app,
	me,
	codex,
})

export default createRootReducer