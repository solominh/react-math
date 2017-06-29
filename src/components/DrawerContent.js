import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import List from 'react-toolbox/lib/list/List'
import ListItem from 'react-toolbox/lib/list/ListItem'
import ListDivider from 'react-toolbox/lib/list/ListDivider'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
    backgroundColor: 'white',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  sidebarLinkSelected: {
    color: 'black',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
  },
};

const DrawerContent = (props) => {
  const { sidebarLink, sidebarLinkSelected } = styles

  return (
    <List selectable ripple>
      <NavLink to="/" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>
        <ListItem caption='Home' leftIcon='home' />
      </NavLink>
      <ListDivider />
      <NavLink to="/add20" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>
        <ListItem caption='Add in range 20' leftIcon='face' />
      </NavLink>
      <NavLink to="/subtract20" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>
        <ListItem caption='Subtract in range 20' leftIcon='face' />
      </NavLink>
      <NavLink to="/multiply1" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>
        <ListItem caption='Multiply 1 digit' leftIcon='face' />
      </NavLink>
      <ListDivider />
      <NavLink to="/about" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>
        <ListItem caption='About' leftIcon='info_outline' />
      </NavLink>
    </List>
  );


};

export default DrawerContent;
