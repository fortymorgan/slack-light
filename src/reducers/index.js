import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return _.keyBy(payload, ch => ch.id);
  },
  [actions.addChannel](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.removeChannel](state, { payload }) {
    return _.omit(state, payload);
  },
  [actions.renameChannel](state, { payload }) {
    return { ...state, [payload.id]: { ...state[payload.id], name: payload.name } };
  },
}, {});

const messages = handleActions({
  [actions.addMessages](state, { payload }) {
    return _.keyBy(payload, m => m.id);
  },
  [actions.addMessage](state, { payload }) {
    return { ...state, [payload.id]: payload };
  },
  [actions.removeChannel](state, { payload }) {
    return _.omitBy(state, m => m.channelId === payload);
  },
}, {});

const error = handleActions({
  [actions.catchError](state, { payload }) {
    return payload;
  },
  [actions.clearError]() {
    return '';
  },
}, '');

const currentChannel = handleActions({
  [actions.setCurrentChannel](state, { payload }) {
    return payload;
  },
  [actions.addChannel](state, { payload }) {
    return payload.id;
  },
  [actions.removeChannel](state, { payload }) {
    return state === payload ? 1 : state;
  },
}, 0);

const modal = handleActions({
  [actions.showModal](state, { payload: { type, id, initial } }) {
    return {
      show: true,
      type,
      id,
      initial,
    };
  },
  [actions.hideModal]() {
    return {
      show: false,
    };
  },
}, { show: false });

export default combineReducers({
  channels,
  messages,
  currentChannel,
  error,
  modal,
  form: formReducer,
});
