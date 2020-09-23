import React from 'react'
import styled from 'styled-components'
import Button from '../Button.js'

export default () => {
  return(
    <Rules>
      <h2 className="title">Rules</h2>
      <p className="description">
        Like each games, there is some rules to know, to perform the bests 
        tactics, take notice of them in our codex dedicated section.
      </p>
      <Button value="Rules" colored={ true } size="small" />
    </Rules>
  )
}

const Rules = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.65);

  .title {
    margin: 10px 0;
  }

  .description {
    text-align: center;
    font-size: 18px;
    margin: 10px 10%;
  }
`