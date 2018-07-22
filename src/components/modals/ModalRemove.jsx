import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalRemove = (props) => {
  const { show, hideModal, onRemoveChannel } = props;

  return (
    <Modal
      show={show}
      bsSize="sm"
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={onRemoveChannel}>Yes</Button>
        <Button onClick={hideModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRemove;
