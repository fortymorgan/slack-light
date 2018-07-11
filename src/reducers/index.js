import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
// import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const channelsList = handleActions({
  [actions.addChannels](state, { payload: { channels } }) {
    return [...state, ...channels];
  },
}, []);

const username = handleActions({
  [actions.setUsername](state, { payload: { user } }) {
    return user;
  },
}, '');

export default combineReducers({
  channelsList,
  username,
  // form: formReducer,
});
