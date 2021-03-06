import actions from './actions';
import lodash from 'lodash';
import { combineReducers } from 'redux';

const actionTypes = actions.actionTypes;

const initialDogState = {
  dogs: []
};

const dogs = (state = initialDogState, action) => {
  const newState = lodash.cloneDeep(state);
  switch(action.type) {
    case actionTypes.RETRIEVED_DOGS:
      newState.dogs = action.value;
      return newState
    case actionTypes.CREATE_DOG:
      newState.dogs.push(action.value);
      return newState
    default: 
      return state
  }
}

const initialReservationState = {
  reservations: []
};

const reservations = (state = initialReservationState, action) => {
  const newState = lodash.cloneDeep(state);
  switch(action.type) {
    case actionTypes.RETRIEVED_RESERVATIONS:
      newState.reservations = action.value;
      return newState
    case actionTypes.CREATE_RESERVATION:
      newState.reservations.push(action.value);
      return newState
    default:
      return state
  }
} 

const initialReviewState = {
  reviews: []
};

const reviews = (state = initialReviewState, action) => {
  const newState = lodash.cloneDeep(state);
  switch(action.type) {
    case actionTypes.RETRIEVED_REVIEWS:
      newState.reviews = action.value;
      return newState
    case actionTypes.CREATE_REVIEW:
      newState.reviews.push(action.value);
      return newState
    default:
      return state
  }
} 


export default combineReducers({ dogs, reservations, reviews });