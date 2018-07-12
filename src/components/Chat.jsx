import React from 'react';
import ChatMessages from '../containers/ChatMessages';
import NewMessageForm from '../containers/NewMessage';

const Chat = () => (
  <div className="col-9">
    <ChatMessages />
    <NewMessageForm />
  </div>
);

export default Chat;
