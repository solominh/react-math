import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  onNumberKeyClick,
  onAllClearKeyClick,
  onDoneKeyClick,
} from '../actions'

import {playTouchSound} from '../sound/SoundManager'

class Keypad extends Component {


  onNumberKeyClick = (number) => {
    playTouchSound()
    this.props.onNumberKeyClick(number)
  }

  onAllClearKeyClick = () => {
    playTouchSound()
    this.props.onAllClearKeyClick()
  }

  onDoneKeyClick = () => {
    playTouchSound()
    this.props.onDoneKeyClick()
  }

  

  render() {
    return (
      <div className="keypad">
        <div className="row">
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(7)}>
            7
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(8)}>
            8
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(9)}>
            9
          </div>
        </div>
        <div className="row">
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(4)}>
            4
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(5)}>
            5
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(6)}>
            6
          </div>
        </div>
        <div className="row">
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(1)}>
            1
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(2)}>
            2
          </div>
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(3)}>
            3
          </div>
        </div>
        <div className="row">
          <div className="btn-key btn-numberkey" onClick={() => this.onNumberKeyClick(0)}>
            0
          </div>
          <div className="btn-key btn-clear" onClick={this.onAllClearKeyClick}>
            AC
          </div>
          <div className="btn-key btn-done" onClick={this.onDoneKeyClick}>
            &#10004;
          </div>
        </div>

      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onNumberKeyClick,
    onAllClearKeyClick,
    onDoneKeyClick,
  }, dispatch);
}


export default connect(null, mapDispatchToProps)(Keypad)
