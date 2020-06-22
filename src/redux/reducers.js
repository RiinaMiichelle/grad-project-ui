import actions from './actions';
import { combineReducers } from 'redux';

const actionTypes = actions.actionTypes;

const initialDogState = {
  dogs: []
};

const dogs = (state = initialDogState, action) => {
  const newState = { ...state };
  switch(action.type) {
    case actionTypes.RETRIEVED_DOGS:
      newState.dogs = action.value;
      return newState
    default: 
      return state
  }
}

const initialReservationState = {};

const reserverations = (state = initialReservationState, actions) => state;

export default combineReducers({ dogs, reserverations });