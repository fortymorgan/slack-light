import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ChannelsList = (props) => {
  const { channelsList } = props;

  return (
    <ListGroup bsClass="list-group col-3">
      {channelsList.map(({ id, name }) => <ListGroupItem key={id}>{name}</ListGroupItem>)}
    </ListGroup>
  );
};

export default ChannelsList;
