import React from 'react';

import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './MaterialTitlePanel';
import SidebarContent from './SidebarContent';
import PuzzleApp from './PuzzleApp'
import Toolbar from './Toolbar'


const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

export default class App extends React.Component {

  state = {
    docked: false,
    open: false,
    transitions: true,
    touch: true,
    shadow: true,
    pullRight: false,
    touchHandleWidth: 20,
    dragToggleDistance: 30,
  };

  onSetOpen = (open) => {
    this.setState({ open: open });
  }

  onMenuButtonClick = (ev) => {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <Toolbar onMenuButtonClick={this.onMenuButtonClick} title={'Simple app'} />
    );

    const sidebarProps = {
      ...this.state,
      sidebar: sidebar,
      sidebarClassName: 'custom-sidebar-class',
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <PuzzleApp />
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}
