import React from 'react';
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

export default class ChatMessages extends React.Component {
  scrollDown = () => {
    const { clientHeight, scrollHeight } = this.window;

    if (scrollHeight > clientHeight) {
      this.window.scrollTop = scrollHeight - clientHeight;
    }
  }

  render() {
    const { messages, errorState, clearError } = this.props;

    return (
      <div className="chat d-flex flex-column justify-content-between">
        <div className="messages mb-3" ref={(div) => { this.window = div; }}>
          {messages.map(m => <Message key={m.id} message={m} />)}
        </div>
        <ErrorMessage message={errorState} handler={clearError} />
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
