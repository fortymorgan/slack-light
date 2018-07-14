import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelsList = handleActions({
  [actions.addChannels](state, { payload: { channels } }) {
    return [...state, ...channels];
  },
  [actions.removeChannel](state, { payload: { id } }) {
    return state.filter(ch => ch.id !== id);
  },
  [actions.renameChannel](state, { payload: { channel } }) {
    return state.map(ch => (ch.id === channel.id ? { ...ch, name: channel.name } : ch));
  },
}, []);

const messagesList = handleActions({
  [actions.addMessages](state, { payload: { messages } }) {
    return [...state, ...messages];
  },
}, []);

const username = handleActions({
  [actions.setUsername](state, { payload: { user } }) {
    return user;
  },
}, '');

const currentChannel = handleActions({
  [actions.setCurrentChannel](state, { payload: { id } }) {
    return id;
  },
}, 0);

const errorState = handleActions({
  [actions.catchError](state, { payload: { error } }) {
    return error;
  },
  [actions.clearError]() {
    return '';
  },
}, '');

export default combineReducers({
  channelsList,
  messagesList,
  username,
  currentChannel,
  errorState,
  form: formReducer,
});
