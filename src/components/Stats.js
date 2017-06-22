import React, { Component } from 'react'

import {
  playRightAnswerSound,
  playWrongAnswerSound,
} from '../sound/SoundManager'

export default class Stats extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return;

    const { right, wrong } = this.props
    const { right: nextWright, wrong: nextWrong } = nextProps
    if (nextWright > right) {
      playRightAnswerSound()
      return;
    }

    if (nextWrong > wrong) {
      playWrongAnswerSound()
      return;
    }
  }

  render() {
    return (
      <div className="stats">
        <div className="wrong-box">
          <span className="wrong-symbol">&#10008;</span>
          {this.props.wrong}
        </div>
        <div className="right-box">
          <span className="right-symbol">&#10004;</span>
          {this.props.right}
        </div>

      </div>
    )
  }
}
