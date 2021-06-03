import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#f00001',
          boxShadow: 'none',
          padding: '10px O',
          borderBottom: '2px solid #840606',
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1}}>
            <div className="header_logo">
              logo
            </div>
          </div>

          <Link to="/the_team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/the_matches">
            <Button color="inherit">Matches</Button>
          </Link>
          <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>

      </AppBar>
    </>
  );
};

export default Header;