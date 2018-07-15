import React from 'react';
import renderer from 'react-test-renderer';
import Channel from '../src/components/Channel';

describe('channel component', () => {
  const createChannel = (active, removable) => (
    <Channel
      active={active}
      name="general"
      removable={removable}
    />
  );

  it('non-active non-removable', () => {
    const tree = renderer
      .create(createChannel(false, false))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('active non-removable', () => {
    const tree = renderer
      .create(createChannel(true, false))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('non-active removable', () => {
    const tree = renderer
      .create(createChannel(false, true))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('active removable', () => {
    const tree = renderer
      .create(createChannel(true, true))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
