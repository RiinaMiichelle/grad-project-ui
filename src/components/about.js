import React from 'react';



function About() {
  return (
    <div class="about-container">
      <div class="about-welcome">Welcome to Happy Paws!</div>
      <br></br>
      <div class="about-mission"> We are on a mission to get our shelter dogs outside to play.</div>
      <div class="about-explanation">Unfortunately, dogs who are left in shelters get very little time for interaction
          and outdoor play due to limited shelter staff and resources.</div>
      <div class="about-explanation">Thats why we came up with an app to connect people with dogs in our shelter.</div>
      <div class="about-explanation">Our app makes it easy to log in, and select an available dog in our shelter
        to take out for an afternoon adventure!</div>
        <div class="about-explanation">When you check your dog back into the shelter, you have the option 
        to upload a review and any images from your afternoon hike, park playtime etc. 
        Our shelter would love to use both as marketing material to get our dogs adopted!</div>
      <div class="about-images-text">
        <div class="about-dogs">We love seeing the dogs get out and play!</div>
      </div>
      <div class="about-images-container">
        <img src="https://images.unsplash.com/photo-1562703219-98e4de78fbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" width="500" height="300"></img>
        <img src="https://images.unsplash.com/photo-1568393690902-cb45000b6939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"width="500" height="300"></img>
      </div>
    </div>
  ) 
}




export default About;