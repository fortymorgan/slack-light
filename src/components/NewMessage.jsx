import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const { currentChannel } = state;

  return { currentChannel };
};

@connect(mapStateToProps, actionCreators)
class NewMessage extends React.Component {
  addMessage = (values) => {
    const { addNewMessage, currentChannel } = this.props;
    const { text } = values;

    addNewMessage(text, currentChannel);
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
