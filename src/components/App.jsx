import React from 'react';
import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';
import ChatMessages from './ChatMessages';
import NewMessageForm from './NewMessage';
import ModalDialog from './ModalDialog';
import Header from './Header';

const mapStateToProps = (state) => {
  const { windowHeight } = state;

  return { windowHeight };
};

@connect(mapStateToProps)
export default class App extends React.Component {
  render() {
    const { windowHeight } = this.props;
    const divStyle = {
      height: windowHeight,
    };

    return (
      <div className="app-container" style={divStyle}>
        <div className="app">
          <Header />
          <ChannelsList inModal={false} />
          <ChatMessages />
        </div>
        <NewMessageForm />
        <ModalDialog />
      </div>
    );
  }
}
