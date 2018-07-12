import { createAction } from 'redux-actions';
import axios from 'axios';

export const addChannels = createAction('CHANNELS_ADD', channels => ({ channels }));
export const addMessages = createAction('MESSAGES_ADD', messages => ({ messages }));
export const setUsername = createAction('USERNAME_SET', user => ({ user }));
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET', id => ({ id }));

export const addNewMessage = (author, text, channel) => async () => {
  const message = {
    data: {
      attributes: {
        author,
        text,
      },
    },
  };

  await axios.post(`${window.location}api/v1/channels/${channel}/messages`, message);
};
