import reducers from '../src/reducers';
import { addChannels, removeChannel, renameChannel } from '../src/actions';

describe('channels list reducers', () => {
  const state = {
    channelsList: [
      {
        name: 'general',
        id: 1,
      },
      {
        name: 'custom',
        id: 2,
      },
    ],
  };

  it('should return initial state', () => {
    expect(reducers(undefined, {}).channelsList).toEqual([]);
  });

  it('should add channels to list', () => {
    expect(reducers({ channelsList: [] }, addChannels([
      {
        name: 'general',
        id: 1,
      },
      {
        name: 'custom',
        id: 2,
      },
    ])).channelsList).toEqual(state.channelsList);
  });

  it('should remove channel from list', () => {
    expect(reducers(state, removeChannel(2)).channelsList).toEqual([
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
    })).channelsList).toEqual([
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
