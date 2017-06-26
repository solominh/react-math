import React, { Component } from 'react'

export default class AddInRange20Screen extends Component {

  render() {
    const { firstNumber, secondNumber } = this.props.puzzle
    const { currentAnswer, operator } = this.props

    const text = `${firstNumber} ${operator} ${secondNumber} = ${currentAnswer}`

    return (
      <div className="screen">
        {text}
      </div>
    )
  }
}
