import './App.css';
import React , { useState, useEffect } from 'react';
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navigation from './components/navigation';
import store from './redux/store'



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
