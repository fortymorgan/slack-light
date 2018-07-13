import React from 'react';

const Message = props => (
  <p><b>{props.author}:</b> {props.text}</p>
);

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
