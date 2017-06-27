import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Keypad from './Keypad'
import Stats from './Stats'
import Screen from './Screen'



class PuzzleApp extends Component {

  render() {
    return (
      <div className="puzzle-app">
        <div className="stats-box">
          <Stats {...this.props.stats} />
        </div>
        <div className="screen-box">
          <Screen {...this.props}/>
        </div>
        <Keypad />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PuzzleApp)
