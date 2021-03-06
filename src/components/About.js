

import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button'
import Dialog from 'react-toolbox/lib/dialog/Dialog'
import AppSkeleton from './AppSkeleton'


class About extends Component {

  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Save", onClick: this.handleToggle }
  ];

  render() {
    return (
      <AppSkeleton>
        <Button icon='info_outline' label='Show about dialog' raised primary onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='My awesome dialog'
        >
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
      </AppSkeleton>
    );
  }


}

export default About;
