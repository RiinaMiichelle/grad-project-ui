import React from 'react';
import './index.css'
import reservations from '../../mockJson/reservations';

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
        <h2>Your reservation history:</h2>
        <div>
          
        </div>

      </div>
    )
  }

}

export default EndUserViewReservations;