import React from 'react';

import DrawerContent from './DrawerContent';

import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import Layout from 'react-toolbox/lib/layout/Layout'
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import Panel from 'react-toolbox/lib/layout/Panel'

import IconMenu  from 'react-toolbox/lib/menu/IconMenu';
import MenuItem  from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider  from 'react-toolbox/lib/menu/MenuDivider';

const MenuTest = () => (
  <IconMenu icon='more_vert' position='topRight' menuRipple className="iconMenu">
    <MenuItem value='solution' icon='lightbulb_outline' caption='Solution' />
    <MenuItem value='favorite' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuDivider />
    <MenuItem value='about' icon='info_outline' caption='About' disabled />
  </IconMenu>
);


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
          <AppBar leftIcon='menu' title="Math"  onLeftIconClick={this.toggleDrawerActive} >
            <MenuTest />
          </AppBar>
          {this.props.children}
        </Panel>
      </Layout>
    );
  }
}



