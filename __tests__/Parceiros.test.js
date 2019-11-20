import React from 'react';
import Parceiros from '../src/screens/Parceiros';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Parceiros />).toJSON();
  expect(tree).toMatchSnapshot();
});