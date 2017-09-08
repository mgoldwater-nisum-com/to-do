import React from 'react';
import ConfigureStore from 'redux-mock-store';
import SetUpCounter from './SetUpCounter';
import {shallow} from 'enzyme';

const initialState = {
  toDoList: {
    allToDos: {0: {id: 0, completed: false, text: 'foo'},  1: {id: 1, completed: true, text: 'bar'}, 2: {id: 2, completed: false, text: 'moo'}}, 
    toDosInOrder: [0]}, 
  visibleToDos: 'All'};
const mockStore = ConfigureStore()(initialState);

test('state is passed to SetUpCounter component', () => {
  const wrapper = shallow(<SetUpCounter store={mockStore}/>);
  expect(wrapper.props().itemsTotal).toEqual(3);
  expect(wrapper.props().itemsRemaining).toEqual(2);
  expect(wrapper.props().itemsDone).toEqual(1);
});