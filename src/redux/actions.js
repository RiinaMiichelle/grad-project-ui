const superagent = require('superagent');


const dogStockPhotos = [
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80',
  'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
];

const getRandomDogPhoto = () => {
  return dogStockPhotos[Math.floor(Math.random() * (dogStockPhotos.length -1))];
}

const ACTION_TYPE = {
  CREATE_DOG: 'CREATE_DOG',
  RETRIEVED_DOGS: 'RETRIEVED_DOGS',
  CREATE_RESERVATION: 'CREATE_RESERVATION',
  RETRIEVED_RESERVATIONS: 'RETRIEVED_RESERVATIONS',
  CREATE_REVIEW: 'CREATE_REVIEW',
  RETRIEVED_REVIEWS: 'RETRIEVED_REVIEWS'
};


const createDog = (dog) => ({
  type: ACTION_TYPE.CREATE_DOG,
  value: dog
})

const createADog = (dispatch) => () => {
  superagent
    .post('http://localhost:4000/dogs')
    .send({ name:'', breed:'', gender:'', age:'', weight:''})
    .set('accept', 'json')
    .then(res => {  
      alert('yay got ' + JSON.stringify(res.body))
      dispatch(createDog(res))
    .end((err, res) => {
      // Calling the end function will send the request
    });
  })
}

const retrievedDogs = (dogs) => ({
  type: ACTION_TYPE.RETRIEVED_DOGS,
  value: dogs
})

const getAllDogs = (dispatch) => () => {
  return fetch('http://localhost:4000/dogs')
    .then((resp) => {
      return resp.json();
    })
    .then((responseJson) => {
      return dispatch(retrievedDogs(responseJson));
    });
}

const createReservation = (reservation) => ({
  type: ACTION_TYPE.CREATE_RESERVATION,
  value: reservation
})

const createAReservation = (dispatch) => (date, userId, dogId) => {
  console.log({ date: date, status: 'APPROVED', dog_id: dogId, user_id: userId })
  superagent
    .post('http://localhost:4000/reservations')
    .send({ date: date, status: 'APPROVED', dog_id: dogId, user_id: userId })
    .set('accept', 'json')
    .then(res => {  
      dispatch(createReservation(res.body))
    });
}

const retrievedRerservations = (reservations) => ({
  type: ACTION_TYPE.RETRIEVED_RESERVATIONS,
  value: reservations
})

const getAllReservations = (dispatch) => (userId) => {
  return fetch(`http://localhost:4000/users/${userId}/reservations`)
    .then((resp) => {
      return resp.json();
    })
    .then((responseJson) => {
      return dispatch(retrievedRerservations(responseJson));
    });
}

const createReview = (review) => ({
  type: ACTION_TYPE.CREATE_REVIEW,
  value: review
})

const createAReview = (dispatch) => (reservationId, dogId, reviewText) => {
  superagent
    .post(`http://localhost:4000/reservations/${reservationId}/reviews`)
    .send({ dog_id: dogId, review_text: reviewText })
    .set('accept', 'json')
    .then(res => {  
      dispatch(createReview(res.body))
    });
}

const retrievedReviews = (reviews) => ({
  type: ACTION_TYPE.RETRIEVED_REVIEWS,
  value: reviews
})

const getAllReviews = (dispatch) => (userId) => {
  return fetch(`http://localhost:4000/users/${userId}/reviews`)
    .then((resp) => {
      return resp.json();
    })
    .then((responseJson) => {
      return dispatch(retrievedReviews(responseJson));
    });
}

export default {
  actionTypes: ACTION_TYPE,
  bindDispatch: (dispatch) => ({
    getAllDogs: getAllDogs(dispatch),
    createADog: createADog(dispatch),
    getAllReservations: getAllReservations(dispatch),
    createAReservation: createAReservation(dispatch),
    getAllReviews: getAllReviews(dispatch),
    createAReview: createAReview(dispatch)
  }),
  getAllDogs,
  createADog,
  getAllReservations,
  createAReservation,
  getAllReviews,
  createAReview
}
