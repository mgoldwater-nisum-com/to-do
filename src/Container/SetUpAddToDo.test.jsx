import React from 'react';
import SetUpAddToDo from './setUpAddToDo';
import configureStore from 'redux-mock-store';
import AddToDo from  '../Presentational/AddToDo/AddToDo.jsx';
import {shallow} from 'enzyme';

let mockStore = configureStore();
let store = mockStore({allToDos: {}, toDosInOrder: []});

test('dispatchToDo prop is passed to the AddToDo component', () => {
  const wrapper = shallow(<SetUpAddToDo store={store}/>);
  const addToDoComponent = wrapper.find(AddToDo);
  expect(addToDoComponent.props().dispatchToDo).toBeTruthy();
});