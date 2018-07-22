import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';

const Form = (props) => {
  const {
    onClose,
    submitName,
    handleSubmit,
    onSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body>
        <Field
          type="text"
          name="channel"
          component="input"
          className="form-control"
          placeholder="Channel name"
          autoComplete="off"
          autoFocus
        />
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="primary" type="submit">{submitName}</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </form>
  );
};

const ModalForm = reduxForm({
  form: 'channelOption',
})(Form);

export default ModalForm;
