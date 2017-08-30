import React from 'react';
import {shallow} from 'enzyme';
import ToDos from './ToDos';
import ToDo from './ToDo/ToDo';

const toggle = jest.fn();

const theToDoList = {0: {id: 0, completed: false, text: 'foo'}, 1: {id: 1, completed: true, text: 'bar'}};
const theToDosInOrder = [0, 1];

const setup = (visibility) => (
  shallow(<ToDos showToDos={visibility} toggle={toggle} toDosInOrder={theToDosInOrder} toDoList={theToDoList}/>)
)

test('Todos component renders', () => {
  const wrapper = setup('foo');
  expect(wrapper.exists()).toBe(true);
});

test('ToDo is called for each item in the toDoList when the  visibility setting is All', () => {
  const wrapper = setup('All');
  expect(wrapper.find(ToDo)).toHaveLength(2);
});

test('ToDo is called for each active item in the toDoList when the  visibility setting is Active', () => {
  const wrapper = setup('Active');
  expect(wrapper.find(ToDo).html()).toEqual('<li>foo</li>')
});

test('ToDo is called for each active item in the toDoList when the  visibility setting is Completed', () => {
  const wrapper = setup('Completed');
  expect(wrapper.find(ToDo).html()).toEqual('<li>bar</li>')
});
