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
      <div className="messages" ref={(div) => { this.window = div; }}>
        {messages.map(({ author, text, id }) => <Message key={id} author={author} text={text} />)}
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
