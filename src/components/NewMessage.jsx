import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

class NewMessage extends React.Component {
  addMessage = (values) => {
    const { addNewMessage, username, currentChannel } = this.props;
    const { text } = values;

    addNewMessage(username, text, currentChannel);
    this.props.reset();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.addMessage)}>
        <FormGroup>
          <Field name="text" component="input" type="text" className="form-control" placeholder="New message" />
        </FormGroup>
      </form>
    );
  }
}

const NewMessageForm = reduxForm({
  form: 'newMessage',
})(NewMessage);

export default NewMessageForm;
