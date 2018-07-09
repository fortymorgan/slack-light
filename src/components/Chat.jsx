import React from 'react';
import ChatMessages from './ChatMessages';
import NewMessage from './NewMessage';

const Chat = () => (
  <div className="chat-window">
    <ChatMessages />
    <NewMessage />
  </div>
);

export default Chat;
