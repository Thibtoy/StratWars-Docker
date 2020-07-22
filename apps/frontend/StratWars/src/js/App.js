import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { setModaleShowing } from './store/app'
import { useSelector } from 'react-redux'

import Armies from './pages/Armies'
import Codex from './pages/Codex'
import Home from './pages/Home'

import Header from './components/layouts/Header'
import Modale from './components/Modale'

import img from '../images/background.jpg'
import '../css/style.css'


const App = () => {
	const modale = useSelector(state => state.app.modale)

    return (
        <Router>
        	<AppBody>
        		{ false != modale && <Modale/> }
	            <Header/>
	            <div>
	                <Switch>
	                    <Route exact path="/">
	                        <Home />
	                    </Route>
	                    <Route path="/armies">
	                        <Armies />
	                    </Route>
	                    <Route path="/codex/:slug?" component={ Codex } />
	                </Switch>
	            </div>
            </AppBody>
        </Router>
    )
}

export default App

const AppBody = styled.div`
	background-image: url(${img});
	min-height: 100vh;
	background-size: cover;
`