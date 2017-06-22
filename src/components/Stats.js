import React, { Component } from 'react'

export default class Stats extends Component {

  render() {
    return (
      <div>
        <div>
          Right {this.props.right}
        </div>
        <div>
          Wrong {this.props.wrong}
        </div>
      </div>
    )
  }
}
