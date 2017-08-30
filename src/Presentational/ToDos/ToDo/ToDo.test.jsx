import React from 'react';
import {shallow} from 'enzyme';
import ToDo from './ToDo';

const onClick = jest.fn()

test('ToDo component renders', () => (
  expect(shallow(<ToDo onClick={onClick} item={{id: 0, completed: false, text: 'test'}}/>).exists()).toBe(true)
));

test('ToDo component returns an HTML element contanining passed in item prop', () => {
  expect(shallow(<ToDo onClick={onClick} item={{id: 1, completed: false, text: 'bar'}}/>).text()).toBe('bar');
});