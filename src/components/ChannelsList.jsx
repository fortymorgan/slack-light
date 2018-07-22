import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Channel from './Channel';

const mapStateToProps = (state) => {
  const { channels, currentChannel } = state;

  const channelsList = Object.values(channels);

  return { channels: channelsList, currentChannel };
};

@connect(mapStateToProps, actionCreators)
export default class ChannelsList extends React.Component {
  onSwitchChannel = id => () => {
    const { setCurrentChannel } = this.props;
    setCurrentChannel(id);
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
    const { channels, currentChannel } = this.props;

    return (
      <ul className="list-group col-3">
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
        <li className="list-group-item add-channel" onClick={this.onAddChannel}>+ Add channel</li>
      </ul>
    );
  }
}
