import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const Input = field => (
  <input
    {...field.input}
    type="text"
    className="form-control"
    placeholder="New message"
    disabled={field.meta.submitting}
    autoFocus
    autoComplete="off"
  />
);

const mapStateToProps = (state) => {
  const { currentChannel, newMessageState } = state;

  return { currentChannel, newMessageState };
};

@connect(mapStateToProps, actionCreators)
class NewMessage extends React.Component {
  addMessage = (values) => {
    const { addNewMessage, currentChannel, pristine } = this.props;
    const { text } = values;

    return !pristine && addNewMessage(text, currentChannel);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.addMessage)} className="new-message">
        <FormGroup>
          <Field name="text" component={Input} />
        </FormGroup>
      </form>
    );
  }
}

const NewMessageForm = reduxForm({
  form: 'newMessage',
})(NewMessage);

export default NewMessageForm;
