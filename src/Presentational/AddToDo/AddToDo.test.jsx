import React from 'react';
import AddToDo from './AddToDo';
import {shallow} from 'enzyme';

test('component renders', () => (
  expect(shallow(<AddToDo dispatchToDo={() => 'foo'}/>).exists()).toBe(true)
));

test('component contains a form with an input element', () => {
  const element = shallow(<AddToDo dispatchToDo={() => 'foo'}/>);
  expect(element.find('form')).toHaveLength(1);
  expect(element.find('input').parent().is('form')).toBe(true);
});