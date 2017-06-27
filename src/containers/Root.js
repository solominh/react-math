import React, { Component } from 'react'
import { Provider } from 'react-redux';

import { Route, BrowserRouter as Router} from 'react-router-dom'

import AddInRange20App from '../containers/AddInRange20App'
import SubtractInRange20App from '../containers/SubtractInRange20App'
import Multiply1DigitApp from '../containers/Multiply1DigitApp'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router basename={'react-math'}>
        <div>
          <Route path='/' exact component={AddInRange20App} />
          <Route path='/add20' exact component={AddInRange20App} />
          <Route path='/subtract20' exact component={SubtractInRange20App} />
          <Route path='/multiply1' exact component={Multiply1DigitApp} />
          {/*<Route path='/' render={() => <div>Page not found</div>} />*/}
        </div>
      </Router>
    </Provider>
  )
}

export default Root;
