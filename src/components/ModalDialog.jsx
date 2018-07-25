import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ModalAdd from './modals/ModalAdd';
import ModalRename from './modals/ModalRename';
import ModalRemove from './modals/ModalRemove';
import ModalChannels from './modals/ModalChannels';

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

  onHideModal = () => {
    const { hideModal, showModal } = this.props;
    if (window.outerWidth < 768) {
      showModal({ type: 'channels' });
    } else {
      hideModal();
    }
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
            hideModal={this.onHideModal}
            onAddChannel={this.onAddChannel}
          />,
      rename: <ModalRename
                show={show}
                initial={initial}
                hideModal={this.onHideModal}
                onRenameChannel={this.onRenameChannel(id)}
              />,
      remove: <ModalRemove
                show={show}
                hideModal={this.onHideModal}
                onRemoveChannel={this.onRemoveChannel(id)}
              />,
      channels: <ModalChannels
                  show={show}
                  hideModal={hideModal}
                />,
    };

    return content[type];
  }
}
