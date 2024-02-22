/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddUserModal = ({ show, handleClose, handleAddUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");

  const handleSubmit = () => {
    handleAddUser({
      user_name: userName,
      age: age,
      place: place,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
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
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddUserModal;
