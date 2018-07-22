import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { ModalAdd, ModalRename, ModalRemove } from './Modals';

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

    const content = {
      add: <ModalAdd
            show={show}
            hideModal={hideModal}
            onAddChannel={this.onAddChannel}
          />,
      rename: <ModalRename
                show={show}
                initial={initial}
                hideModal={hideModal}
                onRenameChannel={this.onRenameChannel(id)}
              />,
      remove: <ModalRemove
                show={show}
                hideModal={hideModal}
                onRemoveChannel={this.onRemoveChannel(id)}
              />,
    };

    return content[type];
  }
}
