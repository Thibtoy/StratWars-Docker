import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getType, getTypeName, setType } from '../../../store/codex'

import styled from 'styled-components'

const Type = (props) => {
	const api = useSelector(state => state.app.axiosInstance)

	const type = useSelector(getType)
	const typeName = useSelector(getTypeName)

	useEffect(() => {
		if (!type && typeName) {
			api.get(`api/type/${typeName}`)
				.then(response => dispatch(setType(response.data)))
				.catch(error => { throw error })
		}
	}, [])

	return (
		<Body>
			{ type && 
				<div className="Wrapper">		
					<h4>{ type.name }</h4>
					<p>{/* type.description */}</p>
				</div>
			}
		</Body>
	)
}

export default Type

const Body = styled.div`
	max-width: 1400px;
	margin: auto;
	padding: 25px 25px 25px 25px;
	box-sizing: border-box;


	.Wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.65);
		padding: 25px;
		border-radius: 5px;

		p {
			padding: 10px;
			text-align: center;
		}
	}
`