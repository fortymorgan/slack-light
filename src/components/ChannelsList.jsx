import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Channel = (props) => {
  const { active, name } = props;
  return active ? <ListGroupItem active>{name}</ListGroupItem>
    : <ListGroupItem>{name}</ListGroupItem>;
};

const ChannelsList = (props) => {
  const { channelsList, currentChannel } = props;

  return (
    <ListGroup bsClass="list-group col-3">
      {channelsList.map(({ id, name }) =>
        <Channel key={id} active={currentChannel === id} name={name} />)}
    </ListGroup>
  );
};

export default ChannelsList;
