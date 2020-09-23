import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { setModaleShowing } from './store/app'
import { useSelector } from 'react-redux'

import Armies from './pages/Armies/Armies'
import Codex from './pages/Codex/Codex'
import Home from './pages/Home'
import Page404 from './pages/Page404'

import Header from './components/Header'
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
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/armies" component={ Armies } />
                    <Route exact path="/codex" component={ Codex } />
                    <Route path="*" component={ Page404 } />
                </Switch>
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