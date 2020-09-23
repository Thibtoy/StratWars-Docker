import React from 'react'
import { Route } from "react-router-dom"

import CodexSearch from './Search/CodexSearch'
import CodexKind from './Kind/CodexKind'
import CodexType from './Type/CodexType'

export default ({ match }) => {
  return (
    <React.Fragment>
      <Route path={ match.path+'/kind/:slug' } component={ CodexKind } />
      <Route path={ match.path+'/type/:slug' } component={ CodexType } />
      <Route exact path={ match.path } component={ CodexSearch } />
    </React.Fragment>
  )
}