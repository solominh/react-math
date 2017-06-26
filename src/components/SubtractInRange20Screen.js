import React, { Component } from 'react'

export default class SubtractInRange20Screen extends Component {

  render() {
    const { firstNumber, secondNumber } = this.props.puzzle
    const { currentAnswer } = this.props

    return (
      <div className="screen">
        {firstNumber}{" - "}{secondNumber}{" = "}{currentAnswer}
      </div>
    )
  }
}
