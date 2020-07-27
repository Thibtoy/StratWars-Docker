import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import StatTable from '../../stats/StatTable'
import { Link } from 'react-router-dom'

const KindCard = (props) => {
	return(
   		<Card>
            <div className="first">
       			<h3>{ props.kind.name }</h3>
                <p>{ props.kind.description }</p>
            </div>
            <div className="second">
       			<StatTable stats={ props.kind.stats }/>
                <Button to={ "/codex/" + props.kind.name } >See</Button>
            </div>
   		</Card>
	)
}

export default KindCard

const Card = styled.div`
	box-sizing: border-box;
	border-radius: 5px;
	padding: 15px;
	background-color: rgba(255, 255, 255, 0.65);

  .first, .second {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .first {
    justify-content: flex-start;
    height: 40%;

    p {
      text-align: center;
      margin: 10px 0;
    }
  }
  
  .second {
    justify-content: flex-end;
    height: 60%;
  }
`

const Button = styled(Link)`
  padding: 7.5px 15px;
  background-color: rgb(0, 245, 0);
  border-radius: 5px;
  border-style: none;
  border 1px solid grey;
  box-sizing: border-box;
  font-size: 15.5px;
  text-decoration: none;
  color: black;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  justify-self: flex-end;

  margin-top: 10px;

  :active {
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5) inset;
    transform: scale(0.98);
  }
`