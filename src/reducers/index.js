import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannels](state, { payload }) {
    return {
      list: payload.reduce((acc, ch) => ({ ...acc, [ch.id]: ch }), {}),
      order: payload.map(ch => ch.id),
    };
  },
  [actions.addChannel]({ list, order }, { payload }) {
    return {
      list: { ...list, [payload.id]: { ...payload, messages: [] } },
      order: [...order, payload.id],
    };
  },
  [actions.removeChannel]({ list, order }, { payload }) {
    return {
      list: _.omit(list, payload),
      order: order.filter(id => id !== payload),
    };
  },
  [actions.renameChannel]({ list, order }, { payload }) {
    return {
      list: _.mapValues(list, ch => (ch.id === payload.id ? { ...ch, name: payload.name } : ch)),
      order,
    };
  },
  [actions.addMessages]({ list, order }, { payload }) {
    return {
      list: _.mapValues(list, ch =>
        ({
          ...ch,
          messages: payload
            .filter(m => m.channelId === ch.id)
            .map(m => m.id),
        })),
      order,
    };
  },
  [actions.addMessage]({ list, order }, { payload }) {
    return {
      list: _.mapValues(list, ch =>
        (ch.id === payload.channelId ? { ...ch, messages: [...ch.messages, payload.id] } : ch)),
      order,
    };
  },
}, {});

const messages = handleActions({
  [actions.addMessages](state, { payload }) {
    return payload.reduce((acc, m) => ({ ...acc, [m.id]: m }), {});
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

export default combineReducers({
  channels,
  messages,
  currentChannel,
  error,
  form: formReducer,
});
