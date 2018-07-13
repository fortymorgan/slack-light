import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = (props) => {
  const { message, handler } = props;
  if (message === '') {
    return null;
  }

  return (
    <Alert bsStyle="danger" onDismiss={handler}>
      {message}
    </Alert>
  );
};

export default ErrorMessage;
