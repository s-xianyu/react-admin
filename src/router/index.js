import React from 'react'
import { Router, Route, IndexRoute,hashHistory } from 'react-router'
import * as Home from '@views/home'

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home.index}></Route>

  </Router>
)
