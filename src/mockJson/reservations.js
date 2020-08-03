// /**
//  * In the future the reservations will be coming from an web server. (A Node.js application).
//  * 
//  * The following will be the reservation endpoints the service will expost
//  * 
//  * GET /reservations
//  *   - Get all of the reservations
//  * GET /reservations/<reservation-id>
//  *   - Get one reservation by its id
//  * POST /reservation
//  *   - Create a reservation. An id will be assigned when it is created.
//  * 
//  * The following are the properties on a reservation:
//  *   - reservationID: the id of the reservation, each reservation's id is guaranteed to be unique
//  *   - dogID: the id of the dog
//  *   - userID: the id of the user
//  *   - resDate: the date of the reservation
//  *   - resTime: the time of the reservation
//  *   - resStatus: the status of the reservation (Approved/Disapproved) 
//  *   - resReview: a review attached to the reservation after return of pet 
//  */


// const reservations = [
//   {
//     "resID": "1",
//     "dogID": "1",
//     "userID": "1",
//     "resDate": "10/2/2020",
//     "resTime": "1:00",
//     "resStatus": "Pending",
//     "resReview": "Review"
//   }
// ]

// export default reservations;