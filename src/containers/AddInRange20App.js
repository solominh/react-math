import React, { Component } from 'react'
import { Provider } from 'react-redux'
import addInRange20Store from '../store/addInRange20Store'
import App from '../components/App'

class AddInRange20App extends Component {

  store = addInRange20Store();

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default AddInRange20App
