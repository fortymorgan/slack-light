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
    const { addNewChannel } = this.props;
    // eslint-disable-next-line no-alert
    const name = window.prompt('Enter channel name (Empty name not allowed)', '');
    if (name) {
      addNewChannel(name);
    }
  }

  onRemoveChannel = id => () => {
    const { removeExistingChannel } = this.props;
    // eslint-disable-next-line no-alert
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      removeExistingChannel(id);
    }
  }

  onRenameChannel = (id, name) => () => {
    const { renameExistingChannel } = this.props;
    // eslint-disable-next-line no-alert
    const newName = window.prompt('Rename channel (Empty name not allowed)', name);
    if (newName) {
      renameExistingChannel(id, newName);
    }
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
