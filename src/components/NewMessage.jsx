import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { currentChannel, newMessageState } = state;

  return { currentChannel, newMessageState };
};

@connect(mapStateToProps, actionCreators)
class NewMessage extends React.Component {
  addMessage = (values) => {
    const { addNewMessage, currentChannel } = this.props;
    const { text } = values;

    addNewMessage(text, currentChannel);
  }

  render() {
    const { newMessageState } = this.props;
    const disabled = newMessageState === 'request';
    const inputField = disabled ?
      <Field name="text" disabled component="input" type="text" className="form-control" placeholder="New message" /> :
      <Field name="text" component="input" type="text" className="form-control" placeholder="New message" autoFocus />;

    return (
      <form onSubmit={this.props.handleSubmit(this.addMessage)}>
        <FormGroup>
          {inputField}
        </FormGroup>
      </form>
    );
  }
}

const NewMessageForm = reduxForm({
  form: 'newMessage',
})(NewMessage);

export default NewMessageForm;
