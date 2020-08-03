import React, { useState } from 'react';
import lodash from 'lodash';
import './index.css';
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import { getCookies } from "../../Utils";

const FlipCard = (props) => {
  const { children, frontFlipBtnText, backFlipBtnTxt } = props;
  const [ flipped, setFlipped ] = useState(false);
  const styles = flipped ? { transform: 'rotateY(180deg)' } : {};
  return (
    <div class="flip-card">
      <div class="flip-card-inner" style={styles}>
        <div class="flip-card-front">
          <div>
            {props.children[0]}
            <button class="see-leave-review" onClick={() => setFlipped(true)}>{frontFlipBtnText}</button>
          </div>
        </div>
        <div class="flip-card-back">
          {props.children[1]}
          <button class="see-leave-review" onClick={() => setFlipped(false)}>{backFlipBtnTxt}</button>
        </div>
      </div>
    </div>
  );
}

const WriteAReview = (props) => {
  const { reduxActions, reservationId, dogId } = props;
  const [reviewText, setReviewText] = useState('');
  return (
    <div class="review-box">
      <div class ="write-review-title">Write Your Review</div>
      <textarea onChange={(e) => setReviewText(e.target.value)}/>
      <button onClick={() => {
          reduxActions.createAReview(reservationId, dogId, reviewText);
        }}
      >
        Submit
      </button>
    </div>
  )
}

class EndUserViewReservations extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isApproved: true
    }
  }

  componentDidMount() {
    const userId = getCookies().userId;
    const { reduxActions } = this.props;
    reduxActions.getAllReservations(userId);
    reduxActions.getAllReviews(userId);
  }

  render() {
    const { reservations, reviews, dogs, reduxActions } = this.props;

    const dogsById = {};
    dogs.forEach(dog => dogsById[dog.id] = dog);

    if (!reservations) {
      return <div>loading...</div>;
    }

    const reviewsByReservationId = {};
    reviews.forEach((review) => reviewsByReservationId[review.reservation_id] = review);

    const reservationsHtml = reservations.map((reservation, idx) => {
      const dogForReservation = dogsById[reservation.dog_id];
      const reservationDate = new Date(Date.parse(reservation.date));
      const dogImage = dogForReservation.image_url;
      const review = reviewsByReservationId[reservation.id];
      return (
        <div class="reservation">
          <FlipCard frontFlipBtnText={review ? 'See Review' : 'Leave Review'} backFlipBtnTxt="See Reservation">
            <div class={`box${idx + 1} reservation-box`}>
              <div class="reservation-details">
                Date: {reservationDate.toDateString()}<br></br>
                Status: {lodash.capitalize(reservation.status)}<br></br>
                Dog Name: {lodash.capitalize(dogForReservation.name)}<br></br>
                Dog Breed: {lodash.capitalize(dogForReservation.breed)}<br></br>
                Dog Gender: {lodash.capitalize(dogForReservation.gender)}
              </div>
              <img class="reservation-image" src={dogImage}></img>
            </div>
            <div class="reservation-box">
              {
                review
                  ? <div class="review-text">{review.review_text}</div>
                  : (
                    <WriteAReview
                      reduxActions={reduxActions}
                      reservationId={reservation.id}
                      dogId={dogForReservation.id}
                    />
                  )
              }
            </div>
          </FlipCard>
        </div>
      );
    })

    return (
      <div>
        <div class="reservation-history">Reservations</div>
            {reservationsHtml}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reservations: state.reservations.reservations,
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxActions: actions.bindDispatch(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndUserViewReservations);