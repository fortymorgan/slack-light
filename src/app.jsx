import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import cookies from 'js-cookie';
import faker from 'faker';
import App from './components/App.jsx';
import * as actions from './actions';
import reducers from './reducers';

export default ({ channels, messages, currentChannelId }) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
  );

  const { username } = cookies.get();

  if (!username) {
    cookies.set('username', faker.name.findName());
  }

  store.dispatch(actions.addChannels(channels));
  store.dispatch(actions.addMessages(messages));
  store.dispatch(actions.setCurrentChannel(currentChannelId));

  const socket = io();
  socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(actions.addMessage(attributes)));
  socket.on('newChannel', ({ data: { attributes } }) => store.dispatch(actions.addChannel(attributes)));
  socket.on('removeChannel', ({ data: { id } }) => store.dispatch(actions.removeChannel(id)));
  socket.on('renameChannel', ({ data: { attributes } }) => store.dispatch(actions.renameChannel(attributes)));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
