// The LogIn Screen is a simple login form with two fields, a username and a password.
// Make sure that you use a type of password on the "password" input so that we cannot see which characters we are typing.
// On submit, the form should set a user cookie

import React from 'react';
import { TextField, Button, Container } from '@material-ui/core'
import { getCookies } from "../Utils"
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function getHashParams() {
  var pageParamString = unescape(window.location.hash.substring(1));
  var paramsArray = pageParamString.split('&');
  var paramsHash = {};

  for (var i = 0; i < paramsArray.length; i++)
  {
      var singleParam = paramsArray[i].split('=');
      paramsHash[singleParam[0]] = singleParam[1];
  }
  return paramsHash;
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: getCookies().loggedIn === 'true',
      username: '',
      password: '',
      redirect: null
    };
  }

  componentDidMount() {
    const idToken = getHashParams().id_token;

    if (!idToken) {
      // User somehow got here without Ping redirecting ... redirect them to Ping to authenticate
      document.location = 'https://auth.pingone.com/e83dff15-2ec2-4ca3-a3cd-ecb8ed94a4dc/as/authorize?client_id=50e41cbf-bb7f-4cf2-9096-25f00fc1fb4a&response_type=id_token&redirect_uri=http://localhost:3000/login';
    } else {
      const idTokenClaims = jwtDecode(idToken);
      document.cookie = "loggedIn=true";
      if (idTokenClaims.given_name && idTokenClaims.family_name) {
        document.cookie = `users_name=${idTokenClaims.given_name} ${idTokenClaims.family_name}`
      } else {
        document.cookie = `users_name=${idTokenClaims.preferred_username}`
      }
      document.cookie = `userId=${idTokenClaims.sub}`;
      this.setState({
        redirect: <Redirect to="/home" />
      });
    }
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
    // if (this.state.isLoggedIn) {
    //   return <Redirect to="/home" />
    // }

    return (
      <div class="loginbackground">
        {this.state.redirect}
      </div>
    )
  }
}

export default Login
