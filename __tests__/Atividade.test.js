import React from 'react';
import Atividade from '../src/screens/Atividade';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Atividade />).toJSON();
  expect(tree).toMatchSnapshot();
});