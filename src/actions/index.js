import { createAction } from 'redux-actions';
import axios from 'axios';
import cookies from 'js-cookie';
import faker from 'faker';
import { reset } from 'redux-form';

export const addChannels = createAction('CHANNELS_ADD');
export const addChannel = createAction('CHANNEL_ADD');
export const addMessages = createAction('MESSAGES_ADD');
export const addMessage = createAction('MESSAGE_ADD');
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');
export const catchError = createAction('ERROR_CATCH');
export const clearError = createAction('ERROR_CLEAR');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const renameChannel = createAction('CHANNEL_RENAME');

export const newMessageRequest = createAction('NEW_MESSAGE_REQUEST');
export const newMessageSuccess = createAction('NEW_MESSAGE_SUCCESS');
export const newMessageFailure = createAction('NEW_MESSAGE_FAILURE');

export const addNewMessage = (text, id) => async (dispatch) => {
  let { username } = cookies.get();

  if (!username) {
    username = faker.name.findName();
    cookies.set('username', username);
  }

  dispatch(newMessageRequest());
  try {
    const message = {
      data: {
        attributes: {
          author: username,
          text,
          time: new Date().toLocaleTimeString(),
        },
      },
    };

    await axios.post(`api/v1/channels/${id}/messages`, message);
    dispatch(newMessageSuccess());
    dispatch(reset('newMessage'));
  } catch (e) {
    dispatch(catchError(e.message));
    dispatch(newMessageFailure());
  }
};

export const addNewChannel = name => async (dispatch) => {
  try {
    const channel = {
      data: {
        attributes: {
          name,
        },
      },
    };

    await axios.post('api/v1/channels', channel);
  } catch (e) {
    dispatch(catchError(e.message));
  }
};

export const removeExistingChannel = id => async (dispatch) => {
  try {
    await axios.delete(`api/v1/channels/${id}`);
  } catch (e) {
    dispatch(catchError(e.message));
  }
};

export const renameExistingChannel = (id, name) => async (dispatch) => {
  try {
    const channel = {
      data: {
        attributes: {
          name,
        },
      },
    };

    await axios.patch(`api/v1/channels/${id}`, channel);
  } catch (e) {
    dispatch(catchError(e.message));
  }
};
