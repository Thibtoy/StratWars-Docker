import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setModale } from '../store/app'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import loggedOut from '../../images/loggedOut.svg'
import loggedIn from '../../images/loggedIn.svg'
import loggedOutShield from '../../images/loggedOutShield.svg'
import loggedInShield from '../../images/loggedInShield.svg'

const Header = (props) => {
	const dispatch = useDispatch()
	const logged = useSelector(state => state.me.logged)

	const showModale = () => dispatch(setModale({ type: 'login', title: 'Login' }))
	
    return (
        <AppHeader>
        	<h1>StratWars</h1>
        	<Nav>
                <ul>
                    <li>
                        <CustomLink activeStyle={{ color: 'red' }} exact to="/">Home</CustomLink>
                        <CustomLink activeStyle={{ color: 'red' }} to="/codex">Codex</CustomLink>
                        <CustomLink activeStyle={{ color: 'red' }} to="/armies">Armies</CustomLink>
                    </li>
                </ul>
            </Nav>
            <LogBtn onClick={ showModale } style={{ backgroundImage: `url(${logged ? loggedInShield : loggedOutShield})` }}>
        		<img className={ logged ? 'logged' : null } src={ logged? loggedIn : loggedOut } />
        	</LogBtn>
        </AppHeader>
    )
}

export default Header

const AppHeader = styled.header`
	width: 100%;
	height: 60px;
	background-color: rgba(255, 255, 255, 0.65);
	position: fixed;
	top: 0px;
	border-bottom: 1.25px solid rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 10;

	h1 {
		font-size: 28px;
	}
`

const Nav = styled.nav`
	width: 100%;

	ul {
		display: flex;
		align-items: center;
		justify-content: center;

		li {
			display: block;
			margin: 0 20px;
		}
	}
`

const LogBtn = styled.div`
	position: absolute;
	right: 10px;
	box-sizing: border-box;
	background-size: cover;
	width: 40px;
	height: 40px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 40px;
		transition: all linear 0.3s;
		transform: rotate(90deg);

		&.logged {
			transform: rotate(270deg)
		}
	}
`

const CustomLink = styled(NavLink)`

`