import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core'

import { Link } from 'react-router-dom';
import { ArsenalLogo } from '../Utils/utils';
import { firebase } from '../../firebase';
import { showErrorToast, showSuccessToast } from '../Utils/utils';

const Header = ({ user }) => {


  const logoutHandler = () => {
    firebase.auth().signOut()
      .then(() => {
        showSuccessToast('Good bye!!')
      }).catch(error => {
        showErrorToast(error.message)
      })
  }

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#f00001',
        boxShadow: 'none',
        paddin: '10px 0',
        borderBottom: '2px solid #00285e'
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <ArsenalLogo
              link={true}
              linkTo={'/'}
              width="70px"
              height="70px"
            />
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>

        {!user ?
          <>
            <Link to="/sign_in">
              <Button color="inherit">Login</Button>
            </Link>
          </>
          : null
        } 

        {user ?
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>


            <Button color="inherit"
              onClick={() => logoutHandler()}

            >Log out</Button>

          </>
          :
          null
        }


      </Toolbar>
    </AppBar>
  )
}

export default Header;