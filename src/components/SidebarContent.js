import React from 'react';
import MaterialTitlePanel from './MaterialTitlePanel';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
    backgroundColor:'white',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  sidebarLinkSelected:{
    color:'black',
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

const SidebarContent = (props) => {
  const {sidebarLink,sidebarLinkSelected} =styles
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
      
        <NavLink to="/" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>Home</NavLink>
        <div style={styles.divider} />
        <NavLink to="/add20" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>Add in range 20</NavLink>
        <NavLink to="/subtract20" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>Subtract in range 20</NavLink>
        <NavLink to="/multiply1" exact activeStyle={sidebarLinkSelected} style={sidebarLink}>Multiply 1 digit</NavLink>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
