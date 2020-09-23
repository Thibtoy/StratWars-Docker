import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getBody, setBody } from '../../store/codex'

const SelectOptions = (props) => {
  const dispatch = useDispatch()
  
  const onChange = event => {
    let target = event.target,
        filter = target.getAttribute('filter'),
        value = target.value

    if (props.callback) {
      new Promise((resolve, reject) => props.callback(value, filter, resolve))
        .then(() => {
          target.value = '0'
        })
    }

    
  }

  return (
    <SelectFilter filter={ props.filter } onChange={ onChange }>
      <option value={ 0 } defaultValue style={ { display: "none" } }>{ props.name }</option>
      <option value={ 1 }>None</option>
      { ((options = []) => {
        for (let key in props.options) {
          options.push(<option key={ key } value={ key }>{ key }</option>)
        }
        return options
      })() }
    </SelectFilter>
  )
}

const SelectFilter = styled.select`
  height: 30px;
  width: 50%;
  max-width: 220px;
  flex-shrink: 0;
  margin-bottom: 10px;
  z-index: 1;

  @media(min-width: 565px) {
    width: 35%;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`

export default SelectOptions