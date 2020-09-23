import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useLocation } from "react-router-dom"
import styled from 'styled-components'
import { getKindName, getTypeName, setUrlParams } from '../../../store/codex'
import CodexSearchHome from './CodexSearchHome'
import CodexSearchResults from './CodexSearchResults'

import FilterBar from '../../../components/codex/FilterBar'

export default ({ match }) => {
  let dispatch = useDispatch()
  let location = useLocation()
  let [search, setSearch] = useState('')

  useEffect(() => {
    if (search !== location.search)
      setSearch(location.search)
  }, [location])

  return (
    <React.Fragment>
      <FilterBar/>
      {
        search === "" ?
          <CodexSearchHome />
        : <CodexSearchResults search={ search }/>
      }
    </React.Fragment>
  )
}