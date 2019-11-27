import React from 'react';
import Atividade from '../src/screens/Atividade';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Atividade />).toJSON();
  expect(tree).toMatchSnapshot();
});


// it('button click', () => {
// 	let button_lang_map = {
// 		'#choose_en_button': Languages.EN,
// 	};
// 	let component = renderer(<Atividade />);
// 	for (button in button_lang_map) {
// 		component.query(button).simulate('press', {});
// 		expect(component.state().currentLanguage).toBe(button_lang_map[button]);
// 	}
// });