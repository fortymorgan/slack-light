import React from 'react';
import ChannelsList from './ChannelsList';
import Chat from './Chat';
import ModalDialog from './ModalDialog';

const App = () => (
  <div className="row">
    <ChannelsList />
    <Chat />
    <ModalDialog />
  </div>
);

export default App;
