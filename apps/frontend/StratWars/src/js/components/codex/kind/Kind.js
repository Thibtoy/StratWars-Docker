import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKind, getKindName, getTypes, setKind, setTypes } from '../../../store/codex'
import styled from 'styled-components'
import Types from '../type/Types'

const Kind = (props) => {
	const dispatch = useDispatch()
	const api = useSelector(state => state.app.axiosInstance)

	const kindName = useSelector(getKindName)
    const kind = useSelector(getKind)
    const types = useSelector(getTypes)

	useEffect(() => {
		if (!kind && kindName) {
			api.get(`api/kind/${kindName}`)
				.then(response => dispatch(setKind(response.data)))
				.catch(error => { throw error })
		}
	}, [])

	return (
		<Body>
			{ kind && 
				<div className="Wrapper">		
					<h4>{ kind.name }</h4>
					<p>{ kind.description }</p>
					<Types />
				</div>
			}
		</Body>
	)
}

export default Kind

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