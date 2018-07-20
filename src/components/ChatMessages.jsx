import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ErrorMessage from './ErrorMessage';

const Message = (props) => {
  const { author, text, time } = props.message;
  return (
    <div className="d-flex justify-content-between mb-1 mr-2">
      <div><b>{author}:</b> {text}</div>
      <div>{time}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    messages,
    channels,
    error,
    currentChannel,
  } = state;

  const currentMessages = channels.list[currentChannel].messages.map(id => messages[id]);

  return { messages: currentMessages, error };
};

@connect(mapStateToProps, actionCreators)
export default class ChatMessages extends React.Component {
  scrollDown = () => {
    const { clientHeight, scrollHeight } = this.window;

    if (scrollHeight > clientHeight) {
      this.window.scrollTop = scrollHeight - clientHeight;
    }
  }

  render() {
    const { messages, error, clearError } = this.props;

    return (
      <div className="chat d-flex flex-column justify-content-between">
        <div className="messages mb-3" ref={(div) => { this.window = div; }}>
          {messages.map(m => <Message key={m.id} message={m} />)}
        </div>
        <ErrorMessage message={error} handler={clearError} />
      </div>
    );
  }

  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate() {
    this.scrollDown();
  }
}
