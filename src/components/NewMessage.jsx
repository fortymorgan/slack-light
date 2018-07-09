import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const NewMessage = () => (
  <form className="new-chat-message">
    <FormGroup>
      <FormControl type="text" placeholder="New message" />
    </FormGroup>
  </form>
);

export default NewMessage;
