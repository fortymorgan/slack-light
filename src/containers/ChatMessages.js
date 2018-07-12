import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ChatMessages from '../components/ChatMessages';

const mapStateToProps = (state) => {
  const { messagesList, currentChannel } = state;

  const messages = messagesList.filter(m => m.channelId === currentChannel);

  return { messages };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ChatMessages);
