import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

const Navigation = (props) => {
  const { userInfo } = props;
  const { username, loggedIn } = userInfo;
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
          <div class="nav-title">Happy Paws<i class="material-icons">pets</i></div>
          </Typography>
          {
            loggedIn
            && (
              <div>
                <Link to="/home">
                  <Button class="nav-home-button" variant="contained" color="primary">Home</Button>
                </Link>
              </div>
            )
          }
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
                  {username && <MenuItem>{`Hello, ${username}`}</MenuItem>}
                  <MenuItem onClick={handleClose} component={Link} to={'/logout'}>Logout</MenuItem>
                </div>
              )
              : (
                <div class="menu-options">
                  <MenuItem onClick={handleClose} component={Link} to={'/login'}>Login</MenuItem>
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