import { createAction } from 'redux-actions';

export const addChannels = createAction('CHANNELS_ADD', channels => ({ channels }));
export const setUsername = createAction('USERNAME_SET', user => ({ user }));
