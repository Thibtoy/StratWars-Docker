import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Codex = (props) => {
	const api = useSelector(state => state.app.axiosInstance)

	const [kinds, setKinds] = useState(false);

	useEffect(() => {
		api.get('api/codex')
			.then(response => setKinds(response.data))
			.catch(error => { throw error })
	}, [])

    return (
        <Body>
           { kinds && kinds.map(kind => (
           		<p>{ kind.name }</p>
           	))} 
        </Body>
    )
}

const Body = styled.div`
	display: grid;
	width: 90%;
	max-width: 1200px;
	margin: auto;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: auto;
	grid-gap: 20px;
	margin-top: 61.25px;
	padding: 85px 0 25px 0;
	box-sizing: border-box;
`

export default Codex