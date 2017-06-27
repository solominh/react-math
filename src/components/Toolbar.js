
import React, { Component } from 'react'


class Toolbar extends Component {

  onMenuButtonClick = (e) => {
    if (this.props.onMenuButtonClick) {
      this.props.onMenuButtonClick(e)
    }
  }

  render() {
    return (
      <div className="toolbar">
        <div
          onClick={this.onMenuButtonClick}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="toolbar-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Toolbar;
