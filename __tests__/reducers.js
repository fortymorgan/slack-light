import reducers from '../src/reducers';
import { addChannels, removeChannel, renameChannel } from '../src/actions';

describe('channels list reducers', () => {
  const state = {
    channels: {
      list: {
        1: {
          name: 'general',
          id: 1,
        },
        2: {
          name: 'custom',
          id: 2,
        },
      },
      order: [1, 2],
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
    ])).channels).toEqual(state.channels);
  });

  it('should remove channel from list', () => {
    expect(reducers(state, removeChannel(2)).channels).toEqual({
      list: {
        1: {
          name: 'general',
          id: 1,
        },
      },
      order: [1],
    });
  });
  it('should rename channel in list', () => {
    expect(reducers(state, renameChannel({
      name: 'random',
      id: 2,
    })).channels).toEqual({
      list: {
        1: {
          name: 'general',
          id: 1,
        },
        2: {
          name: 'random',
          id: 2,
        },
      },
      order: [1, 2],
    });
  });
});
