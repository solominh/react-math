import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AddInRange20 from '../components/AddInRange20'
import addInRange20Store from '../store/addInRange20Store'

class AddInRange20App extends Component {

  store = addInRange20Store();

  render() {
    return (
      <Provider store={this.store}>
        <AddInRange20 />
      </Provider>
    )
  }
}

export default AddInRange20App
