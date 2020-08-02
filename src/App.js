import './App.css';
import React , { useState, useEffect } from 'react';
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navigation from './components/navigation';
import { getCookies } from './Utils';
import store from './redux/store'



function App() {
  const cookies = getCookies();
  const [userInfo, setUserInfo] = useState({
    loggedIn: cookies.loggedIn === 'true',
    userType: cookies.userType,
    username: cookies.username
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation userInfo={userInfo} />
        <Router userInfo={userInfo} setUserInfo={setUserInfo} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
