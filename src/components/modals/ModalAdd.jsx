import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalForm from './ModalForm';

const ModalAdd = (props) => {
  const { show, hideModal, onAddChannel } = props;

  return (
    <Modal
      show={show}
      bsSize="sm"
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>Add channel</Modal.Title>
      </Modal.Header>
      <ModalForm
        onClose={hideModal}
        submitName="Add"
        initialValues={{ channel: '' }}
        onSubmit={onAddChannel}
      />
    </Modal>
  );
};

export default ModalAdd;
