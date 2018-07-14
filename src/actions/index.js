import { createAction } from 'redux-actions';
import axios from 'axios';

export const addChannels = createAction('CHANNELS_ADD', channels => ({ channels }));
export const addMessages = createAction('MESSAGES_ADD', messages => ({ messages }));
export const setUsername = createAction('USERNAME_SET', user => ({ user }));
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET', id => ({ id }));
export const catchError = createAction('ERROR_CATCH', error => ({ error }));
export const clearError = createAction('ERROR_CLEAR');
export const removeChannel = createAction('CHANNEL_REMOVE', id => ({ id }));
export const renameChannel = createAction('CHANNEL_RENAME', channel => ({ channel }));

export const addNewMessage = (author, text, id) => async (dispatch) => {
  try {
    const message = {
      data: {
        attributes: {
          author,
          text,
          time: new Date().toLocaleTimeString(),
        },
      },
    };

    await axios.post(`${window.location}api/v1/channels/${id}/messages`, message);
  } catch (e) {
    dispatch(catchError(e.message));
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

    await axios.post(`${window.location}api/v1/channels`, channel);
  } catch (e) {
    dispatch(catchError(e.message));
  }
};

export const removeExistingChannel = id => async (dispatch) => {
  try {
    await axios.delete(`${window.location}api/v1/channels/${id}`);
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

    await axios.patch(`${window.location}api/v1/channels/${id}`, channel);
  } catch (e) {
    dispatch(catchError(e.message));
  }
};
