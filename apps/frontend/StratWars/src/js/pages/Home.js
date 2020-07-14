import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import styled from 'styled-components'

const Home = (props) => {
	useEffect(() => {
		setTimeout(() => {
			api.get('/api/admin')
			.then(res => console.log(res))
			.catch(err => console.log(err))
		}, 20000)
	}, [])
    return (
        <Body>
            <h1>coucou</h1>
        </Body>
    )
}

const Body = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: flex-start;
	padding: 85px 0 25px 0;
	box-sizing: border-box;
`

export default Home;