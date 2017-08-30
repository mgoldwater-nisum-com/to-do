import React from 'react';
import ConfigureStore from 'redux-mock-store';
import SetUpToggle from './SetUpToggle';
import {shallow} from 'enzyme';


const initialState = {toDoList: {allToDos: {0: {id: 0, completed: false, text: 'foo'}}, toDosInOrder: [0]}};
const mockStore = ConfigureStore()(initialState);

test('state is passed to connected ToDos component', () => {
  const wrapper = shallow(<SetUpToggle store={mockStore}/>);
  expect(wrapper.props().toDoList).toEqual(initialState.toDoList.allToDos);
  expect(wrapper.props().toDosInOrder).toEqual(initialState.toDoList.toDosInOrder);
});

test('dispatch toggleToDo is passed to connected ToDos component', () => {
  const wrapper = shallow(<SetUpToggle store={mockStore}/>);
  expect(wrapper.props().toggleToDo).toBeTruthy();
});