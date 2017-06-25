import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { Route ,BrowserRouter as Router} from 'react-router-dom'

import App from '../components/App'



const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={App} />
      </Router>
    </Provider>
  )
}

export default Root;
