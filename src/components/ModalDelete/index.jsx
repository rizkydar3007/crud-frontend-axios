import axios from "axios";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDelete = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`https://seemly-business-production.up.railway.app/api/v1/category/${props.categoryId}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
    setShow(false);
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Delete</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className="text-center">Apakah anda ingin menghapus data ini ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Tidak
            </Button>
            <button type="submit" className="btn btn-danger">
              Ya
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalDelete;
