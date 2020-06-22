import React from 'react';
import './index.css'

class AdminViewReservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReservations: true
    }
  }

  render() {
    return (
      <div>
        <h2>Current Reservations:</h2>
        <div class="reservation-container">
          <div>1</div>
        </div>
      </div>
    )
  }
}

export default AdminViewReservations;