import React from 'react';
import EndUserMakeReservations from '../EndUserMakeReservations/EndUserMakeReservations';
import EndUserViewReservations from '../EndUserViewReservations/EndUserViewReservations';
import './index.css'


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
      content = <EndUserMakeReservations dogs={dogs} />;
    } else if (contentType === CONTENT_TYPES.VIEW_RESERVATION) {
      content = <EndUserViewReservations/>;
    }

    return (
      <div>
        <div>Hello End User!</div>
        <button onClick={() => this.pickContent(CONTENT_TYPES.MAKE_RESERVATION)}>Make a Reservation</button>
        <button onClick={() => this.pickContent(CONTENT_TYPES.VIEW_RESERVATION)}>View a Reservation</button>
        {content}
      </div>
    )
  }
}

export default EndUserHome;