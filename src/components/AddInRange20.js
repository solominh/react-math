import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Keypad from './Keypad'
import Stats from './Stats'
import AddInRange20Screen from './AddInRange20Screen'



class AddInRange20 extends Component {

  render() {
    return (
      <div>
        <div className="stats-box">
          <Stats {...this.props.stats} />
        </div>
        <div className="screen-box">
          <AddInRange20Screen {...this.props} />
        </div>
        <Keypad />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AddInRange20)
