import React from 'react';
import ChatMessages from './ChatMessages';
import NewMessage from './NewMessage';

const Chat = () => (
  <div className="col-9">
    <ChatMessages />
    <NewMessage />
  </div>
);

export default Chat;
