import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PuzzleApp from '../components/PuzzleApp'
import addInRange20Store from '../store/addInRange20Store'

class AddInRange20App extends Component {

  store = addInRange20Store();

  render() {
    return (
      <Provider store={this.store}>
        <PuzzleApp />
      </Provider>
    )
  }
}

export default AddInRange20App
