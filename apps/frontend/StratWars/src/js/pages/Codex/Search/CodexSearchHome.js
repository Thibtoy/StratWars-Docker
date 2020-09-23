import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from "react-router-dom"
import styled from 'styled-components'

import Rules from '../../../components/codex/Rules'
import KindsAndTypesGallery from '../../../components/codex/KindsAndTypesGallery'

export default ({ match }) => {
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
      <Rules />
      <KindsAndTypesGallery />
    </React.Fragment>
  )
}