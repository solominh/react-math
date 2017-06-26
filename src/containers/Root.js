import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { Route, BrowserRouter as Router } from 'react-router-dom'

import AddInRange20App from '../containers/AddInRange20App'
import SubtractInRange20App from '../containers/SubtractInRange20App'


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/' exact component={AddInRange20App} />
          <Route path='/subtractinrange20' exact component={SubtractInRange20App} />
        </div>
      </Router>
    </Provider>
  )
}

export default Root;
