import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Channel from './Channel';

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
    const { channelsList, currentChannel } = this.props;

    return (
      <ListGroup bsClass="list-group col-3">
        {channelsList.map(({ id, name, removable }) => (
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
        <ListGroupItem onClick={this.onAddChannel}>+ Add channel</ListGroupItem>
      </ListGroup>
    );
  }
}
