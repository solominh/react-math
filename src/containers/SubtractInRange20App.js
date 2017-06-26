import React, { Component } from 'react'
import { Provider } from 'react-redux'
import SubtractInRange20 from '../components/SubtractInRange20'
import subtractInRange20Store from '../store/subtractInRange20Store'

class SubtractInRange20App extends Component {

  store = subtractInRange20Store();

  render() {
    return (
      <Provider store={this.store}>
        <SubtractInRange20 />
      </Provider>
    )
  }
}

export default SubtractInRange20App
