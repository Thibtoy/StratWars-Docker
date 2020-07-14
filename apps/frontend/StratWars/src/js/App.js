import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { useSelector } from 'react-redux'
import { setModaleShowing } from './store/app'

import Home from './pages/Home'
import Header from './components/Header'
import Modale from './components/Modale'
import '../css/style.css'
import img from '../images/background.jpg'
import styled from 'styled-components'


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