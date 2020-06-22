/**
 * In the future the dogs will be coming from an web server. (A Node.js application).
 * 
 * The following will be the dog endpoints the service will expost
 * 
 * GET /dogs
 *   - Get all of the dogs
 * GET /dogs/<dog-id>
 *   - Get one dog by its id
 * POST /dogs
 *   - Create a dog. An id will be assigned when it is created.
 * 
 * The following are the properties on a dog:
 *   - id: the id of the dog, each dog's id is guaranteed to be unique
 *   - name: the name of the dog
 *   - breed: the breed of the dog
 *   - age: the age of the dog
 *   - image: an image for the dog
 *   - gender: the gender of the dog 
 */


// This is dummy dog data until we get the web service up and we can use the API




const dogs = [
  {
    "id": "1",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "2",
    "name": "Else",
    "image": "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "2 Years Old",
    "gender": "Female"
  },
  {
    "id": "3",
    "name": "Ruby",
    "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "3 Years Old",
    "gender": "Female"
  },
  {
    "id": "4",
    "name": "Chichi",
    "image": "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
    "breed": "Lab",
    "age": "4 Years Old",
    "gender": "Female"
  },
  {
    "id": "5",
    "name": "Rory",
    "image": "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "5 Years Old",
    "gender": "Male"
  },
  {
    "id": "6",
    "name": "Ziggy",
    "image": "https://images.unsplash.com/photo-1477868433719-7c5f2731b310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
    "breed": "Poodle",
    "age": "6 Years Old",
    "gender": "Male"
  },
  {
    "id": "7",
    "name": "Freya",
    "image": "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "German Shepard",
    "age": "7 Years Old",
    "gender": "Female"
  },
  {
    "id": "8",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1541888336473-2048f252e9b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "9",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1551622113-f88b73014d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "10",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1509463545580-61e747a6a12f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "11",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "12",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "13",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "14",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1582826058162-d6bed441222f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  },
  {
    "id": "15",
    "name": "Max",
    "image": "https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "breed": "Lab",
    "age": "1 Year Old",
    "gender": "Male"
  }
]

export default dogs;
