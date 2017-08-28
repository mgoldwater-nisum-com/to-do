import React from 'react';
import {render, shallow} from 'enzyme';
import Header from './Header';

test('1 + 1 is 2', () => {
  expect(1+1).toBe(2);
});

test('Header component should render', () => {
  expect(shallow(<Header/>).exists()).toBe(true);
});

test('Header component should display the heading todos', () => {
  expect(render(<Header/>).text()).toEqual('todos');
});