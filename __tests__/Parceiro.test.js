import React from 'react';
import Parceiro from '../src/screens/Parceiro';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Parceiro />).toJSON();
  expect(tree).toMatchSnapshot();
});