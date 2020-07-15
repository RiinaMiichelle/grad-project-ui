import React from 'react';
import AdminApproveReservations from '../AdminApproveReservation/AdminApproveReservations';
import AdminViewReservations from '../AdminViewReservations/AdminViewReservations';
import AdminPetRegistry from '../AdminPetRegistry/AdminPetRegistry';
import reservations from '../../mockJson/reservations';
import './index.css';

const CONTENT_TYPES = {
  APPROVE_RESERVATION: 'APPROVE_RESERVATION',
  VIEW_RESERVATION: 'VIEW_RESERVATION',
  PET_REGISTRY: 'PET_REGISTRY'
}

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: CONTENT_TYPES.APPROVE_RESERVATION
    }
  }

  componentDidMount() {
    const { getAllReservations } = this.props;
    getAllReservations();
  }

  pickContent = (contentType) => {
    this.setState({
      contentType: contentType
    })
  }

  render() {
    const { contentType } = this.state;
    let content;

    const { reservations } = this.props;

    if (contentType === CONTENT_TYPES.APPROVE_RESERVATION) {
      content = <AdminApproveReservations reservations={reservations} />;
    } else if (contentType === CONTENT_TYPES.VIEW_RESERVATION) {
      content = <AdminViewReservations reservations={reservations}/>; 
    } else if (contentType === CONTENT_TYPES.PET_REGISTRY) {
      content = <AdminPetRegistry/>
    }

    return (
      <div>
        <div>Hello Admin!</div>
        <button onClick={() => this.pickContent(CONTENT_TYPES.PET_REGISTRY)}>Pet Registry</button>
        <button onClick={() => this.pickContent(CONTENT_TYPES.APPROVE_RESERVATION)}>Reservation Requests</button>
        <button onClick={() => this.pickContent(CONTENT_TYPES.VIEW_RESERVATION)}>Current Reservations</button>
        {content}
      </div>
    )
  }
}

export default AdminHome;
