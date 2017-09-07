import React from 'react';
import App from './App';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo/SetUpAddToDo';
import SetUpToggle from '../../Container/SetUpToggle/SetUpToggle';
import SetUpFilter from '../../Container/SetUpFilter/SetUpFilter';
import {shallow} from 'enzyme';

test('renders the App component', () => {
  expect(shallow(<App/>).exists()).toBe(true);
});

test('renders all child components', () => {
  expect(shallow(<App/>).find(Header)).toHaveLength(1);
  expect(shallow(<App/>).find(SetUpAddToDo)).toHaveLength(1);
  expect(shallow(<App/>).find(SetUpToggle)).toHaveLength(1);
  expect(shallow(<App/>).find(SetUpFilter)).toHaveLength(1);
});