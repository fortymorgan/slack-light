import { createAction } from 'redux-actions';
import axios from 'axios';
import cookies from 'js-cookie';
import { reset } from 'redux-form';
import routes from '../routes';

export const addChannels = createAction('CHANNELS_ADD');
export const addChannel = createAction('CHANNEL_ADD');
export const addMessages = createAction('MESSAGES_ADD');
export const addMessage = createAction('MESSAGE_ADD');
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');
export const catchError = createAction('ERROR_CATCH');
export const clearError = createAction('ERROR_CLEAR');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const renameChannel = createAction('CHANNEL_RENAME');
export const showModal = createAction('MODAL_SHOW');
export const hideModal = createAction('MODAL_HIDE');
export const resizeWindow = createAction('WINDOW_RESIZE');

export const addNewMessage = (text, id) => async (dispatch) => {
  const { username } = cookies.get();

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

    await axios.post(routes.messages(id), message);
    dispatch(reset('newMessage'));
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

    await axios.post(routes.channels(), channel);
    dispatch(hideModal());
  } catch (e) {
    dispatch(catchError(e.message));
  }
};

export const removeExistingChannel = id => async (dispatch) => {
  try {
    await axios.delete(routes.channel(id));
    dispatch(hideModal());
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

    await axios.patch(routes.channel(id), channel);
    dispatch(hideModal());
  } catch (e) {
    dispatch(catchError(e.message));
  }
};
