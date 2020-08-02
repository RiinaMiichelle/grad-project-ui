import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './index.css'
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import { getCookies } from "../../Utils";



function MyVerticallyCenteredModal(props) {
  const [date, setDate] = React.useState(null);

  const { onClose } = props;

  const handleClose = () => {
  onClose();
  } 


  const onSubmit = () => {
    const { dog, goToReservations } = props;
    const userId = getCookies().userId;
    const { id } = dog;
    props.reduxActions.createAReservation(date, userId, id);
    handleClose();
    goToReservations();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reservation Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Request Date</div>
        <input placeholder="YYYY-MM-DD" onChange={(e) => setDate(e.target.value)}/>
        <br/>
        <button disabled={!date} onClick={onSubmit}>Submit Request</button>
      </Modal.Body>
    </Modal>
  );
}

function DogDetailsModal(props) {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <>
      <Button class="reserve-button" variant="primary" onClick={() => setModalShow(true)}>
        Reserve Me!
      </Button>

      <MyVerticallyCenteredModal
        goToReservations={props.goToReservations}
        reduxActions={props.reduxActions}
        dog={props.dog}
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClose={() => setModalShow(false)}
      />
    </>
  );
}


class EndUserMakeReservations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dogs, reduxActions } = this.props;
    if (!dogs || dogs.length === 0) {
      reduxActions.getAllDogs();
    }
  }


  render() {

    const { dogs, goToReservations } = this.props;

    if (!dogs) {
      return <div>loading...</div>;
    }

    
    const dogsHtml = dogs.map((dog, idx) => {
      return (
        <div class={`box${idx + 1}`}>
            {/* <img src={dog.image} class="dog-image"/><br></br> */}
            {/* Dog id: {dog.id}<br></br> */}
            <img class="dog-image" src={dog.image_url} /><br></br>
            Name: {dog.name}<br></br>
            Breed: {dog.breed}<br></br>
            Gender: {dog.gender}<br></br>
            Age: {dog.age}<br></br>
            Weight: {dog.weight}<br></br>
          <DogDetailsModal
            goToReservations={goToReservations}
            reduxActions={this.props.reduxActions}
            dog={dog}
          />
        </div>
      );
    })

    return (
      <div>
        <div class="available-dogs">Available Dogs</div>
        <div class="container">
          {dogsHtml}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs.dogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxActions: actions.bindDispatch(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EndUserMakeReservations);