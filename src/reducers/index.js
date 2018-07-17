import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelsList = handleActions({
  [actions.addChannels](state, { payload }) {
    return [...state, ...payload];
  },
  [actions.addChannel](state, { payload }) {
    return [...state, payload];
  },
  [actions.removeChannel](state, { payload }) {
    return state.filter(ch => ch.id !== payload);
  },
  [actions.renameChannel](state, { payload }) {
    return state.map(ch => (ch.id === payload.id ? { ...ch, name: payload.name } : ch));
  },
}, []);

const messagesList = handleActions({
  [actions.addMessages](state, { payload }) {
    return [...state, ...payload];
  },
  [actions.addMessage](state, { payload }) {
    return [...state, payload];
  },
}, []);

const currentChannel = handleActions({
  [actions.setCurrentChannel](state, { payload }) {
    return payload;
  },
}, 0);

const errorState = handleActions({
  [actions.catchError](state, { payload }) {
    return payload;
  },
  [actions.clearError]() {
    return '';
  },
}, '');

const newMessageState = handleActions({
  [actions.newMessageRequest]() {
    return 'request';
  },
  [actions.newMessageSuccess]() {
    return 'success';
  },
  [actions.newMessageFailure]() {
    return 'failure';
  },
}, '');

export default combineReducers({
  channelsList,
  messagesList,
  currentChannel,
  errorState,
  newMessageState,
  form: formReducer,
});
