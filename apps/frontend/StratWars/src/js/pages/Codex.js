import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getKindName, getTypeName, setUrlParams } from '../store/codex'

import FilterBar from '../components/codex/FilterBar'
import Kind from '../components/codex/kind/Kind'
import Type from '../components/codex/type/Type'


const Codex = (props) => {
  const dispatch = useDispatch()
  // const kindName = useSelector(getKindName)
  // const typeName = useSelector(getTypeName)

  // if (props.match.params.kindName) {
  //   if (props.match.params.typeName) {
  //     dispatch(setUrlParams({ kindName: props.match.params.kindName, typeName: props.match.params.typeName }))
  //   }
  //   else dispatch(setUrlParams({ kindName: props.match.params.kindName, typeName: false }))
  // }
  // else if (kindName || typeName) dispatch(setUrlParams({ kindName: false, typeName: false }))

  return (
    <React.Fragment>
      <FilterBar/>
    </React.Fragment>
  )
}

export default Codex