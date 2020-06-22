import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './components/login'
import Logout from './components/logout'
import About from './components/about'
import Home from './components/home'


const Router = (props) => {
    const { setUserInfo, userInfo } = props;
        return (
            <Switch>
                <Route exact path="/" component={null} />
                <Route path="/login" render={() => <Login setUserInfo={setUserInfo} />} />
                <Route path="/logout" render={() => <Logout setUserInfo={setUserInfo} />} />
                <Route path="/about" component={About} />
                <Route path="/home" render={() => <Home userInfo={userInfo} />} />
            </Switch>
        );
};

export default Router;