import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import AddInRange20App from '../containers/AddInRange20App'


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={AddInRange20App} />
      </Router>
    </Provider>
  )
}

export default Root;
