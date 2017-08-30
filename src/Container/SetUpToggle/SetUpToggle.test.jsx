import React from 'react';
import ConfigureStore from 'redux-mock-store';
import SetUpToggle, {determineVisibleToDos} from './SetUpToggle';
import {shallow} from 'enzyme';

const sampleToDoList = {
  0: {
    id: 0,
    completed: false,
    text: 'foo'
  },
  1: {
    id: 1,
    completed: true,
    text: 'bar'
  }
};

test('all toDos are returned when visibleToDos is set to All', () => {
  expect(determineVisibleToDos('All', sampleToDoList)).toEqual({0: {id: 0, completed: false, text: 'foo'}, 1: {id: 1, completed: true, text: 'bar'}
  });
});

test('Uncompleted toDos are returned when visibleToDos is set to Active', () => {
  expect(determineVisibleToDos('Active', sampleToDoList)).toEqual({0: {id: 0, completed: false, text: 'foo'}
  });
});

test('Completed toDos are returned when visibleToDos is set to Completed', () => {
  expect(determineVisibleToDos('Completed', sampleToDoList)).toEqual({1: {id: 1, completed: true, text: 'bar'}
  });
});


const initialState = {visibleToDos: 'All', toDoList: {allToDos: {0: {id: 0, completed: false, text: 'foo'}}, toDosInOrder: [0]}};
const mockStore = ConfigureStore()(initialState);

test('state is passed to connected ToDos component', () => {
  const wrapper = shallow(<SetUpToggle store={mockStore}/>);
  expect(wrapper.props().toDoList).toEqual(initialState.toDoList.allToDos);
  expect(wrapper.props().toDosInOrder).toEqual(initialState.toDoList.toDosInOrder);
});

test('dispatch toggleToDo is passed to connected ToDos component', () => {
  const wrapper = shallow(<SetUpToggle store={mockStore}/>);
  expect(wrapper.props().toggle).toBeTruthy();
});