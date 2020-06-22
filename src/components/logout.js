import React from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount() {
    const { setUserInfo } = this.props;
    // clear the log in cookies
    document.cookie = "loggedIn=false";
    document.cookie = "userType=unknown";

    setUserInfo({ loggedIn: false });
  }

  render() {
    return <Redirect to="/login" />
  }
}

export default Logout;