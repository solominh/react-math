import React from 'react';

import DrawerContent from './DrawerContent';

import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Layout from 'react-toolbox/lib/layout/Layout'
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import Panel from 'react-toolbox/lib/layout/Panel'


export default class AppSkeleton extends React.Component {

  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Layout>
        <NavDrawer active={this.state.drawerActive}
          pinned={this.state.drawerPinned} permanentAt='xxxl'
          onOverlayClick={this.toggleDrawerActive}>
          <DrawerContent />
        </NavDrawer>
        <Panel>
          <AppBar leftIcon='menu' title="Math" onLeftIconClick={this.toggleDrawerActive} />
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}
