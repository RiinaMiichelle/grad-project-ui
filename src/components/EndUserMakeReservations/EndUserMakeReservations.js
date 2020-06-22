import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './index.css'

function MyVerticallyCenteredModal(props) {
  const [field1, setField1] = React.useState(null);
  const [field2, setField2] = React.useState(null);

  const onSubmit = () => {
    // do something with the fields
    console.log('onSubmit')
    console.log(field1);
    console.log(field2);
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
        <div>Date</div>
        <input onChange={(e) => setField1(e.target.value)}/>
        <div>Time</div>
        <input onChange={(e) => setField2(e.target.value)}/>
        <br></br>
        <button disabled={!field1 || !field2} onClick={onSubmit}>Submit Request</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DogDetailsModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Reserve Me!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


class EndUserMakeReservations extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { dogs } = this.props;

    const dogsHtml = dogs.map((dog, idx) => {
      return (
        <div class={`box${idx + 1}`}>
            <img src={dog.image} class="dog-image"/><br></br>
            Dog id: {dog.id}<br></br>
            Name: {dog.name}<br></br>
            Breed: {dog.breed}<br></br>
            Age: {dog.age}<br></br>
            Gender: {dog.gender}<br></br>
          <DogDetailsModal />
        </div>
      );
    })

    return (
      <div class="container">
        {dogsHtml}
      </div>
    )
  }
}


export default EndUserMakeReservations;