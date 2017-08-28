import React from 'react';
import {shallow} from 'enzyme';
import ToDos from './ToDos';
import ToDo from './ToDo/ToDo';

test('Todos component renders', () => (
  expect(shallow(<ToDos toDoList={[{id: 0, completed: false, text: 'bla'}]}/>).exists()).toBe(true)
));

test('ToDo is called for each item in the toDoList', () => {
  const toDoList = [{id: 0, completed: false, text: 'foo'}];
  expect(shallow(<ToDos toDoList={toDoList}/>).find(ToDo)).toHaveLength(1);
  toDoList.push({id: 1, completed: false, text: 'bar'});
  expect(shallow(<ToDos toDoList={toDoList}/>).find(ToDo)).toHaveLength(2);
});