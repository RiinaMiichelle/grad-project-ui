import React from 'react';
import './index.css'

class EndUserViewReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isApproved: true
    }
  }

  render() {
    return (
      <div>
        <h2>Reservation History:</h2>
        <div class="reservation-container">
          <div>1</div>
        </div>
      </div>
    )
  }
}

export default EndUserViewReservations;