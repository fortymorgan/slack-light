import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ChannelsList from '../components/ChannelsList';

const mapStateToProps = (state) => {
  const { channelsList } = state;

  return { channelsList };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ChannelsList);
