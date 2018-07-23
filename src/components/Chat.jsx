import React from 'react';
import ChatMessages from './ChatMessages';
import NewMessageForm from './NewMessage';

const Chat = () => (
  <div className="chat d-flex flex-column justify-content-end">
    <ChatMessages />
    <NewMessageForm />
  </div>
);

export default Chat;
