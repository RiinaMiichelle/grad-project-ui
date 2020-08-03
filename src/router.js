import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './components/login';
import Logout from './components/logout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import { getCookies } from './Utils';

const getUserInfo = () => {
    const cookies = getCookies();
    return {
        loggedIn: cookies.loggedIn === 'true' ? true : false,
        users_name: cookies.users_name,
        user_id: cookies.userId
    };
};

const Router = (props) => {
    const { setUserInfo } = props;
    const userInfo = getUserInfo();
        return (
            <Switch>
                <Route exact path="/" component={() => <Home userInfo={userInfo} />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/logout" render={() => <Logout />} />
                <Route path="/home" render={() => <Home userInfo={userInfo} />} />
                <Route path="/about" render={() => <About userInfo={userInfo} />} />
                <Route path="/contact" render={() => <Contact userInfo={userInfo} />} />
            </Switch>
        );
};

export default Router;