import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actionCreators from '../actions';
import Channel from './Channel';

const mapStateToProps = (state) => {
  const { channels, currentChannel, modal } = state;

  const channelsList = Object.values(channels);

  return { channels: channelsList, currentChannel, modal };
};

@connect(mapStateToProps, actionCreators)
export default class ChannelsList extends React.Component {
  onSwitchChannel = id => (e) => {
    const { hideModal } = this.props;
    if (e.currentTarget === e.target) {
      const { setCurrentChannel } = this.props;
      setCurrentChannel(id);
      hideModal();
    }
  }

  onAddChannel = () => {
    const { showModal } = this.props;
    showModal({ type: 'add' });
  }

  onRemoveChannel = id => () => {
    const { showModal } = this.props;
    showModal({ type: 'remove', id });
  }

  onRenameChannel = (id, name) => () => {
    const { showModal } = this.props;
    showModal({ type: 'rename', id, initial: name });
  }

  render() {
    const { channels, currentChannel, inModal } = this.props;

    const className = cn({
      'list-group': true,
      'channels-list': true,
      'modal-show': inModal,
    });

    return (
      <ul className={className}>
        {channels.map(({ id, name, removable }) => (
          <Channel
            key={id}
            active={currentChannel === id}
            name={name}
            handleSwitch={this.onSwitchChannel(id)}
            handleRemove={this.onRemoveChannel(id)}
            handleRename={this.onRenameChannel(id, name)}
            removable={removable}
          />
        ))}
        <li className="list-group-item add-channel" onClick={this.onAddChannel}>+ add channel</li>
      </ul>
    );
  }
}
