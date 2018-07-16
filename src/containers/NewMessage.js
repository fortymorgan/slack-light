import { connect } from 'react-redux';
import cookies from 'js-cookie';
import faker from 'faker';
import * as actionCreators from '../actions';
import NewMessageForm from '../components/NewMessage';

const mapStateToProps = (state) => {
  const { currentChannel } = state;

  let { username } = cookies.get();

  if (!username) {
    username = faker.name.findName();
    cookies.set('username', username);
  }

  return { username, currentChannel };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(NewMessageForm);
