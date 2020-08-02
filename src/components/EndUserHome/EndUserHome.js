import React from 'react';
import EndUserMakeReservations from '../EndUserMakeReservations/EndUserMakeReservations';
import EndUserViewReservations from '../EndUserViewReservations/EndUserViewReservations';
import './index.css'
import { getCookies } from "../../Utils"


const CONTENT_TYPES = {
  MAKE_RESERVATION: 'MAKE_RESERVATION',
  VIEW_RESERVATION: 'VIEW_RESERVATION'
}

class EndUserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: CONTENT_TYPES.MAKE_RESERVATION
    }
  }

  componentDidMount() {
    const { getAllDogs } = this.props;
    getAllDogs();
  }

  pickContent = (contentType) => {
    this.setState({
      contentType: contentType
    })
  }

  render() {
    const { contentType } = this.state;
    let content;

    const { dogs } = this.props;

    if (contentType === CONTENT_TYPES.MAKE_RESERVATION) {
      content = (
        <EndUserMakeReservations
          dogs={dogs}
          goToReservations={() => this.pickContent(CONTENT_TYPES.VIEW_RESERVATION)}
        />
      );
    } else if (contentType === CONTENT_TYPES.VIEW_RESERVATION) {
      content = <EndUserViewReservations dogs={dogs} />;
    }

    const cookies = getCookies();

    return (
      <div>
        <div classname="hello-username">Hello, {cookies.username}!</div>
        <button class="end-user-buttons" onClick={() => this.pickContent(CONTENT_TYPES.MAKE_RESERVATION)}>Reserve a Pet</button>
        <button class="end-user-buttons" onClick={() => this.pickContent(CONTENT_TYPES.VIEW_RESERVATION)}>Your Reservations</button>
        {content}
      </div>
    )
  }
}

export default EndUserHome;