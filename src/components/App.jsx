import React from 'react';
import ChannelsList from '../containers/ChannelsList';
import Chat from './Chat';

const App = () => (
  <div className="app">
    <ChannelsList />
    <Chat />
  </div>
);

export default App;
