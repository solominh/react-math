import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from '../components/App'
import multiply1DigitStore from '../store/multiply1DigitStore'

class Multiply1DigitApp extends Component {

  store = multiply1DigitStore();

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default Multiply1DigitApp
