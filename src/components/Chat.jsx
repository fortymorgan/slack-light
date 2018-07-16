import React from 'react';
import ChatMessages from './ChatMessages';
import NewMessageForm from './NewMessage';

const Chat = () => (
  <div className="col-9">
    <ChatMessages />
    <NewMessageForm />
  </div>
);

export default Chat;
