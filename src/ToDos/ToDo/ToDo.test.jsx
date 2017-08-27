import React from 'react';
import {shallow} from 'enzyme';
import ToDo from './ToDo';

test('ToDo component renders', () => (
  expect(shallow(<ToDo/>).exists()).toBe(true)
));

test('ToDo component returns an HTML element contanining passed in item prop', () => {
  expect(shallow(<ToDo item="bar"/>).text()).toBe('bar');
});