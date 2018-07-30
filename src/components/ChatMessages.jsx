import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ErrorMessage from './ErrorMessage';

const Message = (props) => {
  const { author, text, time } = props.message;
  const currentTime = new Date(time).toLocaleTimeString();
  return (
    <div className="d-flex justify-content-between mb-1 mr-2">
      <div><b>{author}:</b> {text}</div>
      <div>{currentTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    messages,
    error,
    currentChannel,
    windowHeight,
  } = state;

  const currentMessages = Object.values(messages).filter(m => m.channelId === currentChannel);

  return { messages: currentMessages, error, windowHeight };
};

@connect(mapStateToProps, actionCreators)
export default class ChatMessages extends React.Component {
  scrollDown = (predicate) => {
    if (predicate) {
      this.window.scrollTop = this.window.scrollHeight - this.window.clientHeight;
    }
  }

  render() {
    const {
      messages,
      error,
      clearError,
      windowHeight,
    } = this.props;

    const divStyle = {
      height: windowHeight - 138,
    };

    return (
      <div className="chat-messages" style={divStyle}>
        <div className="messages" ref={(div) => { this.window = div; }}>
          {messages.map(m => <Message key={m.id} message={m} />)}
        </div>
        <ErrorMessage message={error} handler={clearError} />
      </div>
    );
  }

  componentDidMount() {
    const { clientHeight, scrollHeight } = this.window;
    this.scrollDown(scrollHeight > clientHeight);
  }

  componentDidUpdate() {
    const { clientHeight, scrollHeight, scrollTop } = this.window;
    this.scrollDown(clientHeight + scrollTop === scrollHeight);
  }
}
