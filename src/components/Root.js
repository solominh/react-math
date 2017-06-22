import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'



const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */}
      <ConnectedRouter history={history}>
        <Route path='/' exact component={App} />
      </ConnectedRouter>
    </Provider>
  )
}

export default Root;
