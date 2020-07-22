import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Codex = (props) => {
	const api = useSelector(state => state.app.axiosInstance)

	const [kinds, setKinds] = useState(false);

	useEffect(() => {
		console.log('coucou', props)
		api.get('api/codex')
			.then(response => {
				console.log(response.data)
				setKinds(response.data)
			})
			.catch(error => { throw error })
	}, [])

    return (
        <Body>
           { kinds && kinds.map((kind, i) => (
           		<KindCard key={i}>
           			<h3>{ kind.name }</h3>
       				<table>
       					<thead>
       						<tr>
       							<th>Cost</th>
       							<th>Life</th>
       							<th>Move</th>
       							<th>Vision</th>
       						</tr>
       					</thead>
       					<tbody>
       						<tr>
       							<td>{ kind.stats.costPoints + 'pts' }</td>
       							<td>{ kind.stats.life }</td>
       							<td>{ kind.stats.move }</td>
       							<td>{ kind.stats.vision }</td>
       						</tr>
       					</tbody>
       					<thead>
       						<tr>
       							<th colSpan="4" style={{ textAlign: "left" }}>Damages:</th>
       						</tr>
       					</thead>
       					<thead>
       						<tr>
       							<th colSpan="2">Physical</th>
       							<th>Distant</th>
       							<th>Magical</th>
       						</tr>
       					</thead>
       					<tbody>
       						<tr>
       							<td colSpan="2">{ kind.stats.physicalDammages }</td>
       							<td>{ kind.stats.distantDammages }</td>
       							<td>{ kind.stats.magicalDammages }</td>
       						</tr>
       					</tbody>
       					<thead>
       						<tr>
       							<th colSpan="4" style={{ textAlign: "left" }}>Defense:</th>
       						</tr>
       					</thead>
       					<thead>
       						<tr>
       							<th colSpan="2">Physical</th>
       							<th>Distant</th>
       							<th>Magical</th>
       						</tr>
       					</thead>
       					<tbody>
       						<tr>
       							<td colSpan="2">{ kind.stats.physicalDefense + "%" }</td>
       							<td>{ kind.stats.distantDefense + "%" }</td>
       							<td>{ kind.stats.magicalDefense + "%" }</td>
       						</tr>
       					</tbody>
       				</table>
           		</KindCard>
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

const KindCard = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	border-radius: 5px;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	background-color: rgba(255, 255, 255, 0.65);

	table, th, td {
		border: 1px solid black;
	}

	th, td {
		padding: 5px;
	}

	td {
		text-align: center;
	}

`



export default Codex