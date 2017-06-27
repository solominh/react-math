import React, { Component } from 'react'

export default class Screen extends Component {

  render() {
    const { firstNumber, secondNumber, operator } = this.props.puzzle
    const { currentAnswer } = this.props

    const text = `${firstNumber} ${operator} ${secondNumber} = ${currentAnswer}`

    return (
      <div className="screen">
        {text}
      </div>
    )
  }
}
