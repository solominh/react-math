import React, { Component } from 'react'

export default class AddInRange20Screen extends Component {

  render() {
    const { firstNumber, secondNumber, operator } = this.props.puzzle
    console.log(this.props)
    const { currentAnswer } = this.props

    const text = `${firstNumber} ${operator} ${secondNumber} = ${currentAnswer}`

    return (
      <div className="screen">
        {text}
      </div>
    )
  }
}
