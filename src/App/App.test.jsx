import React from 'react';
import App from './App';
import Header from '../Header/Header';
import {shallow} from 'enzyme';

test('renders the App component', () => {
  expect(shallow(<App/>).exists()).toBe(true);
});

xtest('renders all child components', () => {
  expect(shallow(<App/>).find(Header)).toHaveLength(1);
  expect(shallow(<App/>).find(AddToDo)).toHaveLength(1);
  expect(shallow(<App/>).find(ToDos)).toHaveLength(1);
  expect(shallow(<App/>).find(FilterToDos)).toHaveLength(1);
});