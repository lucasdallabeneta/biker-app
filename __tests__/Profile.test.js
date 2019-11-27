import React from 'react';
import Profile from '../src/screens/Profile';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('creditos test', () => {
//   let tree = renderer.create(
//     <Profile/>
//   ).getInstance();

//   expect(tree.handleCreditos()).toEqual(0);
// });

 