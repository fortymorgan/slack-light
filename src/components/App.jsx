import React from 'react';
import ChannelsList from './ChannelsList';
import ChatMessages from './ChatMessages';
import NewMessageForm from './NewMessage';
import ModalDialog from './ModalDialog';
import Header from './Header';

const App = () => (
  <div className="app-container">
    <div className="app">
      <Header />
      <ChannelsList inModal={false} />
      <ChatMessages />
    </div>
    <NewMessageForm />
    <ModalDialog />
  </div>
);

export default App;
