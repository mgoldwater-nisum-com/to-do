import React from 'react';
import App from './App';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDos from '../ToDos/ToDos';
import FilterToDos from '../FilterToDos/FilterToDos';
import {shallow} from 'enzyme';

test('renders the App component', () => {
  expect(shallow(<App/>).exists()).toBe(true);
});

test('renders all child components', () => {
  expect(shallow(<App/>).find(Header)).toHaveLength(1);
  expect(shallow(<App/>).find(AddToDo)).toHaveLength(1);
  expect(shallow(<App/>).find(ToDos)).toHaveLength(1);
  expect(shallow(<App/>).find(FilterToDos)).toHaveLength(1);
});