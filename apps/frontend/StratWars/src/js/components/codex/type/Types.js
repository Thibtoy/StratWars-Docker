import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTypes, getTypes } from '../../../store/codex'

import styled from 'styled-components'

import TypeCard from './TypeCard'

const Types = (props) => {
	const dispatch = useDispatch()

	const api = useSelector(state => state.app.axiosInstance)
	const types = useSelector(getTypes)

	useEffect(() => {
		if (!types) {
			api.get("api/types")
				.then(response => dispatch(setTypes(response.data)))
				.catch(error => { throw error })
		}
	}, [])

	return(
		<Body>
			{ types && ((typeCards = []) => {
				for (let key in types) typeCards.push(<TypeCard type={ types[key] } key={key}/>)
					return typeCards
			})() } 
		</Body>
	)
	
}
export default Types


const Body = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
	max-width: 1200px;
	margin: auto;
	padding: 25px 25px 25px 25px;
	box-sizing: border-box;
`