import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import App from './components/App.jsx';
import * as actions from './actions';
import reducers from './reducers';

export default ({ channels }) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(),
  );

  store.dispatch(actions.addChannels(channels));

  const { username } = cookies.get();

  if (!username) {
    const newUser = faker.name.findName();
    store.dispatch(actions.setUsername(newUser));
    cookies.set('username', newUser);
  } else {
    store.dispatch(actions.setUsername(username));
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
