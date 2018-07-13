import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Channel = (props) => {
  const { active, name, handler } = props;
  return active ? <ListGroupItem active>{name}</ListGroupItem>
    : <ListGroupItem onClick={handler}>{name}</ListGroupItem>;
};

export default class ChannelsList extends React.Component {
  onSwitchChannel = id => () => {
    const { setCurrentChannel } = this.props;
    setCurrentChannel(id);
  }

  render() {
    const { channelsList, currentChannel } = this.props;

    return (
      <ListGroup bsClass="list-group col-3">
        {channelsList.map(({ id, name }) => (
          <Channel
            key={id}
            active={currentChannel === id}
            name={name}
            handler={this.onSwitchChannel(id)}
          />
        ))}
      </ListGroup>
    );
  }
}
