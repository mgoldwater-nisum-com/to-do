import React from 'react';
import ConfigureStore from 'redux-mock-store';
import SetUpFilter from './SetUpFilter';
import {shallow} from 'enzyme';

const initialState = {toDoList: {allToDos: {0: {id: 0, completed: false, text: 'foo'}}, toDosInOrder: [0], visibleToDos: 'All'}};
const mockStore = ConfigureStore()(initialState);

test('state is passed to FilterToDos component', () => {
  const wrapper = shallow(<SetUpFilter store={mockStore}/>);
  expect(wrapper.props().visible).toEqual(initialState.visibleToDos);
});

test('dispatch toggleFilter is passed to connected FilterToDos component', () => {
  const wrapper = shallow(<SetUpFilter store={mockStore}/>);
  expect(wrapper.props().toggleFilter).toBeTruthy();
});