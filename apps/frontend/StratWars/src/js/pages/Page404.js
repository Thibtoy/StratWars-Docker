import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default ({ match }) => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <p>404 Not Found</p>
    </React.Fragment>
  )
}