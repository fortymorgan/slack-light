import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return { ...state, list: payload };
  },
  [actions.addChannel](state, { payload }) {
    return { ...state, list: [...state.list, payload] };
  },
  [actions.removeChannel](state, { payload }) {
    return { ...state, list: state.list.filter(ch => ch.id !== payload) };
  },
  [actions.renameChannel](state, { payload }) {
    return {
      ...state,
      list: state.list
        .map(ch => (ch.id === payload.id ?
          { ...ch, name: payload.name } : ch)),
    };
  },
  [actions.setCurrentChannel](state, { payload }) {
    return { ...state, current: payload };
  },
}, {});

const messages = handleActions({
  [actions.addMessages](state, { payload }) {
    return { ...state, list: payload };
  },
  [actions.addMessage](state, { payload }) {
    return { ...state, list: [...state.list, payload] };
  },
}, {});

const error = handleActions({
  [actions.catchError](state, { payload }) {
    return { ...state, message: payload };
  },
  [actions.clearError]() {
    return {};
  },
}, {});

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
  channels,
  messages,
  error,
  newMessageState,
  form: formReducer,
});
