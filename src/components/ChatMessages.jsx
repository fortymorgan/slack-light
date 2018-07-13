import React from 'react';

const Message = (props) => {
  const { author, text, time } = props.message;
  return (
    <div className="d-flex justify-content-between">
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
    const { messages } = this.props;
    return (
      <div className="messages mb-3" ref={(div) => { this.window = div; }}>
        {messages.map(m => <Message key={m.id} message={m} />)}
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
