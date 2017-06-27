import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from '../components/App'
import subtractInRange20Store from '../store/subtractInRange20Store'

class SubtractInRange20App extends Component {

  store = subtractInRange20Store();

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default SubtractInRange20App
