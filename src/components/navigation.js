import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { getCookies } from '../Utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const getUserInfo = () => {
  const cookies = getCookies();
  return {
    loggedIn: cookies.loggedIn === 'true' ? true : false,
    users_name: cookies.users_name,
    user_id: cookies.userId
  };
};

const Navigation = (props) => {
  const { users_name, loggedIn } = getUserInfo();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <div class="nav-title">
                Happy Paws<i class="material-icons">pets</i>
          </div>
          </Typography>
          {
            loggedIn
            && (
              <div>
                {/* <Link to="/home">
                  <Button class="nav-home-button" variant="contained" color="primary">Home</Button>
                </Link> */}
              </div>
            )
          }
          <Link to="/home">
            <Button class="nav-home-button" variant="contained" color="primary">Home</Button>
          </Link>
          <Link to="/about">
            <Button class="nav-about-button" variant="contained">About</Button>
          </Link>
          <Link to="/contact">
            <Button class="nav-about-button" variant="contained">Contact</Button>
          </Link>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            {
              loggedIn
              ? (
                <div class="menu-options">
                  {<MenuItem>{`Hello, ${users_name}`}</MenuItem>}
                  <MenuItem
                    onClick={() => {
                      document.cookie.split(";").forEach(function(c) {
                        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                      document.location = 'https://auth.pingone.com/e83dff15-2ec2-4ca3-a3cd-ecb8ed94a4dc/as/signoff?post_logout_redirect_uri=http://localhost:3000/home';
                    }}
                  >
                    Logout
                  </MenuItem>
                </div>
              )
              : (
                <div class="menu-options">
                  <MenuItem
                    onClick={() => {
                        document.location = 'https://auth.pingone.com/e83dff15-2ec2-4ca3-a3cd-ecb8ed94a4dc/as/authorize?client_id=50e41cbf-bb7f-4cf2-9096-25f00fc1fb4a&response_type=id_token&redirect_uri=http://localhost:3000/login';
                      }}
                    >
                      Login
                    </MenuItem>
                </div>
              )
            }
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;