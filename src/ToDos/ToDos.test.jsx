import React from 'react';
import {shallow} from 'enzyme';
import ToDos from './ToDos';
import ToDo from './ToDo/ToDo';

test('Todos component renders', () => (
  expect(shallow(<ToDos/>).exists()).toBe(true)
));

test('ToDo is called for each item in the toDoList', () => {
  const toDoList = ['foo'];
  expect(shallow(<ToDos toDoList={toDoList}/>).find(ToDo)).toHaveLength(1);
  toDoList.push('bar');
  expect(shallow(<ToDos toDoList={toDoList}/>).find(ToDo)).toHaveLength(2);
});