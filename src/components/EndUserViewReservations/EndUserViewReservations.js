import React from 'react';
import lodash from 'lodash';
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
    const { reduxActions } = this.props;
    reduxActions.getAllReservations();
  }

  render() {

    const { reservations, dogs } = this.props;

    const dogsById = {};
    dogs.forEach(dog => dogsById[dog.id] = dog);

    if (!reservations) {
      return <div>loading...</div>;
    }

    const reservationsHtml = reservations.map((reservation, idx) => {
      const dogForReservation = dogsById[reservation.dog_id];
      const reservationDate = new Date(Date.parse(reservation.date));
      const dogImage = dogForReservation.image_url;
      return (
        <div class={`box${idx + 1}`}>
            Date: {reservationDate.toDateString()}<br></br>
            Status: {lodash.capitalize(reservation.status)}<br></br>
            Dog Name: {lodash.capitalize(dogForReservation.name)}<br></br>
            Dog Breed: {lodash.capitalize(dogForReservation.breed)}<br></br>
            Dog Gender: {lodash.capitalize(dogForReservation.gender)}<br></br>
            <img class="reservation-image" src={dogImage}></img>
        </div>
      );
    })

    return (
      <div>
        <div class="reservation-history">Reservations</div>
        <div class="reservations-container">
            {reservationsHtml}
        </div>
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