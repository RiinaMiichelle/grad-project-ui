import React from 'react';
import './index.css';
import {connect} from 'react-redux';
import actions from '../../redux/actions';

class EndUserViewReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isApproved: true
    }
  }

  componentDidMount() {
    const { reservations, reduxActions } = this.props;
    if (!reservations || reservations.length === 0) {
      reduxActions.getAllReservations();
    }
  }



  render() {

    const { reservations } = this.props;

    if (!reservations) {
      return <div>loading...</div>;
    }

    const reservationsHtml = reservations.map((reservation, idx) => {
      return (
        <div class={`box${idx + 1}`}>
            Reservation id: {reservation.id}<br></br>
            Date: {reservation.date}<br></br>
            Status: {reservation.status}<br></br>
            Dog id: {reservation.dog_id}<br></br>
            User id: {reservation.user_id}<br></br>
        </div>
      );
    })

    return (
      <div class="reservations-container">
        {reservationsHtml}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations.reservations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxActions: actions.bindDispatch(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndUserViewReservations);