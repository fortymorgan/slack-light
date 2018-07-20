export default {
  channels: () => ['api', 'v1', 'channels'].join('/'),
  channel: id => ['api', 'v1', 'channels', id].join('/'),
  messages: id => ['api', 'v1', 'channels', id, 'messages'].join('/'),
};
