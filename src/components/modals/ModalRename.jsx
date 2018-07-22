import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalForm from './ModalForm';

const ModalRename = (props) => {
  const {
    show,
    initial,
    hideModal,
    onRenameChannel,
  } = props;

  return (
    <Modal
      show={show}
      bsSize="sm"
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>Rename Channel</Modal.Title>
      </Modal.Header>
      <ModalForm
        onClose={hideModal}
        submitName="Rename"
        initialValues={{ channel: initial }}
        onSubmit={onRenameChannel}
      />
    </Modal>
  );
};

export default ModalRename;
