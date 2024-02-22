/* eslint-disable react/prop-types */
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const EditUserModal = ({ show, handleClose, user, fetchData }) => {
  const [userName, setUserName] = useState(user?.user_name);
  const [age, setAge] = useState(user?.age);
  const [place, setPlace] = useState(user?.place);
  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/users/${user.user_id}`, {
        user_name: userName,
        age: age,
        place: place,
      })
      .then((res) => {
        console.log(res);
        fetchData();
        handleClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user?.user_name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              defaultValue={user?.age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              defaultValue={user?.place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
