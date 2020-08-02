import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './components/login';
import Logout from './components/logout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


const Router = (props) => {
    const { setUserInfo, userInfo } = props;
        return (
            <Switch>
                <Route exact path="/" component={() => <Home userInfo={userInfo} />} />
                <Route path="/login" render={() => <Login setUserInfo={setUserInfo} />} />
                <Route path="/logout" render={() => <Logout setUserInfo={setUserInfo} />} />
                <Route path="/home" render={() => <Home userInfo={userInfo} />} />
                <Route path="/about" render={() => <About userInfo={userInfo} />} />
                <Route path="/contact" render={() => <Contact userInfo={userInfo} />} />
            </Switch>
        );
};

export default Router;