import reducers from '../src/reducers';
import { addChannels, removeChannel, renameChannel } from '../src/actions';

describe('channels list reducers', () => {
  const state = {
    channels: {
      list: [
        {
          name: 'general',
          id: 1,
        },
        {
          name: 'custom',
          id: 2,
        },
      ],
    },
  };

  it('should return initial state', () => {
    expect(reducers(undefined, {}).channels).toEqual({});
  });

  it('should add channels to list', () => {
    expect(reducers({ channels: {} }, addChannels([
      {
        name: 'general',
        id: 1,
      },
      {
        name: 'custom',
        id: 2,
      },
    ])).channels.list).toEqual(state.channels.list);
  });

  it('should remove channel from list', () => {
    expect(reducers(state, removeChannel(2)).channels.list).toEqual([
      {
        name: 'general',
        id: 1,
      },
    ]);
  });
  it('should rename channel in list', () => {
    expect(reducers(state, renameChannel({
      name: 'random',
      id: 2,
    })).channels.list).toEqual([
      {
        name: 'general',
        id: 1,
      },
      {
        name: 'random',
        id: 2,
      },
    ]);
  });
});
