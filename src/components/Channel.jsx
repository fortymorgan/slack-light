import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import cn from 'classnames';

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

  const className = cn({
    'list-group-item': true,
    'd-flex': true,
    'justify-content-between': true,
    'pr-3': true,
    channel: true,
    active,
  });

  return <li className={className} onClick={handleSwitch}>{name}{options}</li>;
};

export default Channel;
