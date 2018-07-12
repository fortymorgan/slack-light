import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import NewMessageForm from '../components/NewMessage';

const mapStateToProps = (state) => {
  const { username, currentChannel } = state;

  return { username, currentChannel };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(NewMessageForm);
