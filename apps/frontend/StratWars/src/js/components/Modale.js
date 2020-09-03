import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModale } from '../store/app'
import styled from 'styled-components'

import Login from './modaleForms/Login'
import Register from './modaleForms/Register'

const Modale = (props) => {
	const dispatch = useDispatch()
	const modale = useSelector(state => state.app.modale)

	const clickOutsideModale = event => {
		if (event.target.id === 'OutsideModale') dispatch(setModale(false))
	}

	return (
		<ModaleOut id='OutsideModale' onClick={ clickOutsideModale }>
			<ModaleBox>
				{ modale.title && 
					<h2>{ modale.title }</h2>
				}
				<ModaleContent>
					{ modale.type === 'login' && <Login/> }
					{ modale.type === 'register' && <Register/> }
				</ModaleContent>
			</ModaleBox>
		</ModaleOut>
	)
}

const ModaleOut = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(64, 64, 64, 0.45);
	z-index: 11;
`

const ModaleBox = styled.div`
	position: fixed;
	background-color: rgba(255, 255, 255, 0.65);
	border: 1.25px solid rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	box-sizing: border-box;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size = 22px;
	}
`

const ModaleContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	flex-grow: 2;
`

export default Modale