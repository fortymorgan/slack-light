import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ModalForm from './ModalForm';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { modal } = state;

  return { modal };
};

@connect(mapStateToProps, actionCreators)
export default class ModalDialog extends React.Component {
  onAddChannel = (values) => {
    const { addNewChannel } = this.props;
    addNewChannel(values.channel);
  }

  onRemoveChannel = id => () => {
    const { removeExistingChannel } = this.props;
    removeExistingChannel(id);
  }

  onRenameChannel = id => (values) => {
    const { renameExistingChannel } = this.props;
    renameExistingChannel(id, values.channel);
  }

  render() {
    const {
      modal: {
        show,
        type,
        id,
        initial,
      },
      hideModal,
    } = this.props;

    if (!show) {
      return null;
    }

    const header = text => (
      <Modal.Header>
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
    );

    const content = {
      add: {
        header: header('Add channel'),
        body: (
          <ModalForm
            onClose={hideModal}
            submitName="Add"
            initialValues={{ channel: '' }}
            onSubmit={this.onAddChannel}
          />
        ),
      },
      rename: {
        header: header('Rename Channel'),
        body: (
          <ModalForm
            onClose={hideModal}
            submitName="Rename"
            initialValues={{ channel: initial }}
            onSubmit={this.onRenameChannel(id)}
          />
        ),
      },
      remove: {
        header: header('Are you sure?'),
        body: (
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onRemoveChannel(id)}>Yes</Button>
            <Button onClick={hideModal}>Cancel</Button>
          </Modal.Footer>
        ),
      },
    };

    return (
      <Modal show={show} bsSize="sm">
        {content[type].header}
        {content[type].body}
      </Modal>
    );
  }
}
