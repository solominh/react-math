import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Keypad from './Keypad'
import Stats from './Stats'
import SubtractInRange20Screen from './SubtractInRange20Screen'



class SubtractInRange20 extends Component {

  render() {
    return (
      <div>
        <div className="stats-box">
          <Stats {...this.props.stats} />
        </div>
        <div className="screen-box">
          <SubtractInRange20Screen {...this.props} />
        </div>
        <Keypad />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SubtractInRange20)
