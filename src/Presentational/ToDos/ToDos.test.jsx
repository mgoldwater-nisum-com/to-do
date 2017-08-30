import React from 'react';
import {shallow} from 'enzyme';
import ToDos from './ToDos';
import ToDo from './ToDo/ToDo';

const toggle = jest.fn();
const sampleString = 'bar';

test('Todos component renders', () => {
  const theToDoList = {0: {id: 0, completed: false, text: 'bla'}};
  const theToDosInOrder = [0];
  expect(shallow(<ToDos showToDos={sampleString} toggle={toggle} toDosInOrder={theToDosInOrder} toDoList={theToDoList}/>).exists()).toBe(true);
});

test('ToDo is called for each item in the toDoList', () => {
  let toDoList = {0: {id: 0, completed: false, text: 'foo'}};
  let theToDosInOrder = [0];
  expect(shallow(<ToDos showToDos={sampleString} toggle={toggle} toDosInOrder={theToDosInOrder} toDoList={toDoList}/>).find(ToDo)).toHaveLength(1);
  toDoList = {0: {id: 0, completed: false, text: 'foo'}, 1: {id: 1, completed: false, text: 'bar'}};
  theToDosInOrder = [0, 1];
  expect(shallow(<ToDos showToDos={sampleString} toggle={toggle} toDosInOrder={theToDosInOrder} toDoList={toDoList}/>).find(ToDo)).toHaveLength(2);
});