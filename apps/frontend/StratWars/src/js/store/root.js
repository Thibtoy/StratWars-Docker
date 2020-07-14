import { combineReducers } from 'redux'
import { reducer as app } from './app'
import { reducer as me } from './me'


const createRootReducer = combineReducers({
	app,
	me,
})

export default createRootReducer