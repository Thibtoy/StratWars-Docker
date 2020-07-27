import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StatTable = (props) => {
	return (
        <Table>
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
					<td>{ props.stats.costPoints + 'pts' }</td>
					<td>{ props.stats.life }</td>
					<td>{ props.stats.move }</td>
					<td>{ props.stats.vision }</td>
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
					<td colSpan="2">{ props.stats.physicalDammages }</td>
					<td>{ props.stats.distantDammages }</td>
					<td>{ props.stats.magicalDammages }</td>
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
					<td colSpan="2">{ props.stats.physicalDefense + "%" }</td>
					<td>{ props.stats.distantDefense + "%" }</td>
					<td>{ props.stats.magicalDefense + "%" }</td>
				</tr>
			</tbody>
		</Table>
    )
}

export default StatTable

const Table = styled.table`
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