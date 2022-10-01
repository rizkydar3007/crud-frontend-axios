import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCreate = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://seemly-business-production.up.railway.app/api/v1/category", {
        name: name,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Data
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Create</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input type="text" className="form-control" id="name" placeholder="Name" onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreate;
