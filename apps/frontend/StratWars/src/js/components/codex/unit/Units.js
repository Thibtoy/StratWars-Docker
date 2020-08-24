import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getKindName, getTypeName, getUnits, setUnits } from '../../../store/codex'

import styled from 'styled-components'

import UnitCard from './UnitCard'

const Units = (props) => {
	const dispatch = useDispatch()

	const api = useSelector(state => state.app.axiosInstance)
	const units = useSelector(getUnits)
	const kindName = useSelector(getKindName)
	const typeName = useSelector(getTypeName)

	useEffect(() => {
		if (!units) {
			api.get(`api/units/${kindName}/${typeName}`)
				.then(response => {
					dispatch(setUnits(response.data))
				})
				.catch(error => { throw error })
		}
	}, [])

	return(
		<Body>
			{units && ((unitCards = []) => {
				for (let key in units) unitCards.push(<UnitCard unit={ units[key] } key={key}/>)
					return unitCards
			})() } 
		</Body>
	)
	
}
export default Units


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