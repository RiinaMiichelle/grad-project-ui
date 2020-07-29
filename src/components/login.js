// The LogIn Screen is a simple login form with two fields, a username and a password.
// Make sure that you use a type of password on the "password" input so that we cannot see which characters we are typing.
// On submit, the form should set a user cookie

import React from 'react';
import { TextField, Button, Container } from '@material-ui/core'
import { getCookies } from "../Utils"
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookies().loggedIn === 'true',
      username: '',
      password: ''
    };
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  onLogin = (e) => {
    const { username } = this.state;
    const { setUserInfo } = this.props;
    e.preventDefault()
  
    let userType;
    if (username === 'admin') {
      // if username is admin then they are an admin user
      userType = "admin";
    } else {
      // anything else and they are an end user
      userType = "endUser";
    }

    document.cookie = "loggedIn=true";
    document.cookie = `userType=${userType}`
    document.cookie = `username=${username}`
    document.cookie = `userId=1`; // TODO make the user id real

    setUserInfo({ loggedIn: true, userType, username });

    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    console.log('here');
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />
    }

    return (
      <div class="loginbackground">
        <Container class="formbackground">
          <form onSubmit={this.onLogin}>
            <TextField
              name="username"
              label="Username"
              type="text"
              onChange={(e) => this.updateInput('username', e.target.value)}
            />
            <br></br>
            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={(e) => this.updateInput('password', e.target.value)}
            />
            <br></br>
            <Button type="submit" variant="contained" class="loginbutton" color="primary">Login</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default Login
