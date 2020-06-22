/**
 * In the future the user's will be coming from an web server. (A Node.js application).
 * 
 * The following will be the user endpoints the service will expost
 * 
 * GET /users
 *   - Get all of the users
 * GET /users/<user-id>
 *   - Get one user by its id
 * POST /user
 *   - Create a user. An id will be assigned when it is created.
 * 
 * The following are the properties on a user:
 *   - id: the id of the user, each user's id is guaranteed to be unique
 *   - name: the name of the user
 *   - phoneNumber: a phone number for the user
 *   - address: an address for the user  
 */


// This is dummy user data until we get the web service up and we can use the API




const users = [
  {
    "id": "1",
    "name": "Sarina",
    "phoneNumber": "6618022628",
    "address": "5928 walnut way"
  }
]

export default users;