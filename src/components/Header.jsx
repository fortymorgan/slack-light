import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => {
  const {
    messages,
    error,
    currentChannel,
    channels,
  } = state;

  const currentMessages = Object.values(messages).filter(m => m.channelId === currentChannel);

  return { messages: currentMessages, error, currentChName: channels[currentChannel].name };
};

@connect(mapStateToProps, actionCreators)
export default class Header extends React.Component {
  onShowChannels = () => {
    const { showModal } = this.props;
    showModal({ type: 'channels' });
  }

  render() {
    const { currentChName } = this.props;
    return (
      <div className="header pt-3">
        <div className="d-flex">
          <div className="channels-button pr-3">
            <button type="button" className="btn btn-sm btn-default sandwich" onClick={this.onShowChannels}>
              <img src="/assets/menu.svg" alt=""/>
            </button>
          </div>
          <h4 className="m-0">Chat</h4>
        </div>
        <div className="current-channel-name pr-3">{currentChName}</div>
      </div>
    );
  }
}
