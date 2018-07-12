import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
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

  store.dispatch(actions.addChannels(channels));
  store.dispatch(actions.addMessages(messages));
  store.dispatch(actions.setCurrentChannel(currentChannelId));

  const { username } = cookies.get();

  if (!username) {
    const newUser = faker.name.findName();
    store.dispatch(actions.setUsername(newUser));
    cookies.set('username', newUser);
  } else {
    store.dispatch(actions.setUsername(username));
  }

  const socket = io();
  socket.on('newMessage', ({ data: { attributes } }) => store.dispatch(actions.addMessages([attributes])));

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
