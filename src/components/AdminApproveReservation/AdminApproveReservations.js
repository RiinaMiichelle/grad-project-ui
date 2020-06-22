import React, { useState } from 'react';
import reservations from '../../mockJson/reservations';
import './index.css'


class AdminApproveReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isApproved: true
    }
  }

  render() {
    const { reservations } = this.props;

    const reservationHtml = reservations.map((reservation, idx) => {
      return (
        <div class={`box-${idx + 1}`}>
          <p>
            Reservation ID: {reservation.resID}<br></br>
            Dog ID: {reservation.dogID}<br></br>
            User ID: {reservation.userID}<br></br>
            Date: {reservation.resDate}<br></br>
            Time: {reservation.resTime}<br></br>
            Status: {reservation.resStatus}<br></br>
            Review: {reservation.resReview}<br></br>
            <button>Approve</button><button>Deny</button>
          </p>
        </div>
      );
    })

    return (
      <div>
        <h2>Current Reservation Requests:</h2>
        <div class="reservation-container">
          {reservationHtml}
        </div>
      </div>
    )
  }
}


//   render() {
//     const { reservations } = this.props;

//     const newReservation = () => {
      

//     }

//     return(
//       <div>
//         <h2>Reservation requests:</h2>
//         <div class="reservation-container">
//           <div>1</div>
//         </div>
        
//       </div>
//     )
//   }
// }


export default AdminApproveReservations;
