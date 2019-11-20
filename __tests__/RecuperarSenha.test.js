import React from 'react';
import RecuperarSenha from '../src/screens/RecuperarSenha';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<RecuperarSenha />).toJSON();
  expect(tree).toMatchSnapshot();
});