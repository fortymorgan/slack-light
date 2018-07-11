import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import faker from 'faker';
import cookies from 'js-cookie';
import App from './components/App.jsx';
import * as actions from './actions';
import reducers from './reducers';

export default ({ channels }) => {
  // eslint-disable-next-line no-underscore-dangle
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;

  const devtoolMiddleware = ext && ext();

  const store = createStore(
    reducers,
    devtoolMiddleware,
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
