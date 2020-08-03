import React from 'react';
import { Redirect } from 'react-router-dom';
import EndUserHomeContainer from '../containers/EndUserHomeContainer';
import AdminHome from './AdminHome/AdminHome';
import reservations from '../mockJson/reservations';

const Home = (props) => {
  const { userInfo } = props;

  // if (!userInfo.loggedIn) {
  //   return <Redirect to="/login" />
  // }

  // if (userInfo.userType === 'admin') {
  //   return <AdminHome reservations={reservations} getAllReservations={() => 'TODO get all reservations'} />
  // } else if (userInfo.userType === 'endUser') {
    return <EndUserHomeContainer />
  // }
  
}

export default Home;