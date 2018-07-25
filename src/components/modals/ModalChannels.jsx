import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ChannelsList from '../ChannelsList';

const ModalChannels = (props) => {
  const { show, hideModal } = props;

  return (
    <Modal
      show={show}
      bsSize="sm"
      dialogClassName="modal-dialog-centered"
    >
      <ChannelsList inModal={true} />
      <Modal.Footer>
        <Button onClick={hideModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalChannels;
