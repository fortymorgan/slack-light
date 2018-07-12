import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelsList = handleActions({
  [actions.addChannels](state, { payload: { channels } }) {
    return [...state, ...channels];
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

export default combineReducers({
  channelsList,
  messagesList,
  username,
  currentChannel,
  form: formReducer,
});
