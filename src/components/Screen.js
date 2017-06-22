import React, { Component } from 'react'

export default class Screen extends Component {

  render() {
    const { firstNumber, secondNumber } = this.props.puzzle
    const { currentAnswer } = this.props

    return (
      <div>
        {firstNumber}{" + "}{secondNumber}{" = "}{currentAnswer}
      </div>
    )
  }
}
