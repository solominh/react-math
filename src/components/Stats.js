import React, { Component } from 'react'

export default class Stats extends Component {

  render() {
    return (
      <div className="stats">
        <div className="right-box">
          <span className="right-symbol">&#10004;</span>
          {this.props.right}
        </div>
        <div className="wrong-box">
          <span className="wrong-symbol">&#10008;</span>
          {this.props.wrong}
        </div>
      </div>
    )
  }
}
