import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Keypad from './Keypad'
import Stats from './Stats'
import Screen from './Screen'

class AddOperatorRange20 extends Component {

  render() {
    return (
      <div>

        <Stats {...this.props.stats} />
        <div className="screen">
          <Screen {...this.props} />
        </div>
        <Keypad />
      </div>
    )
  }

}

function mapStateToProps({ reducer }) {
  return reducer
}

export default connect(mapStateToProps)(AddOperatorRange20)
