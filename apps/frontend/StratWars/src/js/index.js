import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import { init } from './store/app'
import App from './App'

const MOUNT_NODE = document.getElementById('app')
const store = configureStore()

store.dispatch(init())

ReactDom.render(
	<Provider store={ store }>
		<App/>
	</Provider>, 
	MOUNT_NODE
)