import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '76%',
  // margin: 'auto',
};

class MapContainer extends React.Component {
  render() {
    return (
      <div>
          <Map 
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
            lat: 30.267153,
            lng: -97.743057
            }}
          />
        </div>
    );
  }
}

const GoogleMap = GoogleApiWrapper({
  apiKey: 'AIzaSyCmpVGvt8Bh76YtUB4TmifrGPZVhi2iWAM'
})(MapContainer);


function Contact() {
  return (
    <div class="contact">
      <div class="contact-us">Contact Us</div>
      <div class="contacts">Phone Number: (512) 802-8262 </div>
      <div class="contacts">Address: 777 Safe Haven Drive Austin TX, 78704  </div>
      <div class="contain">
        <div class="contact-area">
          <form class="form">
            <div class="form-header">Send us a message<i class="material-icons">mail_outline</i></div>
            <label class="contact-form-labels" for="first-name">First name:</label>
            <input class="contact-form-inputs" type="text" name="firstname" placeholder="First name"/>
            <br></br>
            <label class="contact-form-labels" for="last-name">Last name:</label>
            <input class="contact-form-inputs" type="text" name="lastname" placeholder="Last name"/>
            <br></br>
            <label class="contact-form-labels" for="last-name">Email:</label>
            <input class="contact-form-inputs" type="text" name="email" placeholder="Email"/>
            <br></br>
            <label class="contact-form-labels" for="phone-number">Phone:</label>
            <input class="contact-form-inputs" type="text" name="phone-number" placeholder="Phone number"/>
            <br></br>
            <label class="contact-form-labels" for="subject">Subject:</label>
            <textarea class="contact-form-inputs" name="subject" placeholder="Your messege"></textarea>
            <br></br>
            <input class="contact-form-submit" type="submit" value="Submit"></input>
          </form>
        </div>
        <GoogleMap/>
      </div>
    </div>
  )
}

export default Contact;