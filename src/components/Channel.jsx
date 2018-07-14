import React from 'react';
import { ListGroupItem, Tooltip, OverlayTrigger } from 'react-bootstrap';

const Channel = (props) => {
  const {
    active,
    name,
    handleSwitch,
    handleRemove,
    handleRename,
    removable,
  } = props;

  const generateTooltip = text => (
    <Tooltip id="rename-tooltip">
      {text}
    </Tooltip>
  );

  const removeButton = !removable ? null :
    <OverlayTrigger placement="top" overlay={generateTooltip('Remove')}>
      <span className="delete ml-2" onClick={handleRemove} />
    </OverlayTrigger>;

  const options = (
    <div className="options d-flex">
      <OverlayTrigger placement="top" overlay={generateTooltip('Rename')}>
        <span className="rename" onClick={handleRename} />
      </OverlayTrigger>
      {removeButton}
    </div>
  );

  return active ? <ListGroupItem active>{name}{options}</ListGroupItem>
    : <ListGroupItem onClick={handleSwitch}>{name}{options}</ListGroupItem>;
};

export default Channel;
