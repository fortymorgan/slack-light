import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalForm from './ModalForm';

export const ModalAdd = (props) => {
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

export const ModalRename = (props) => {
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

export const ModalRemove = (props) => {
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
