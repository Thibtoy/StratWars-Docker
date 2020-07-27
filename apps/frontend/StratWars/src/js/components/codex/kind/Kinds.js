import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setKinds, getKinds } from '../../../store/codex'

import KindCard from './KindCard'
import styled from 'styled-components'

const Kinds = (props) => {
	const dispatch = useDispatch()
	const api = useSelector(state => state.app.axiosInstance)
	const kinds = useSelector(getKinds)

	useEffect(() => {
		if (!kinds) {
			api.get('api/kinds')
				.then(response => dispatch(setKinds(response.data)))
				.catch(error => { throw error })
		}
	}, [])
	

	return(
		<Body>
			{ kinds && ((kindCards = []) => {
				for (let key in kinds) kindCards.push(<KindCard kind={ kinds[key] } key={key} />)
				return kindCards
			})() } 
		</Body>
	)
	
}
export default Kinds


const Body = styled.div`
	display: grid;
	max-width: 1400px;
	margin: auto;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: auto;
	grid-gap: 20px;
	padding: 25px 25px 25px 25px;
	box-sizing: border-box;
`