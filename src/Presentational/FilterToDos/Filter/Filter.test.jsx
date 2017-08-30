import React from 'react';
import {shallow} from 'enzyme';
import Filter from './Filter';

const onClick = jest.fn();

test('Filter component renders', () => (
  expect(shallow(<Filter onClick={onClick}> foo </Filter>).exists()).toBe(true)
));

test('Filter component has the text of its children prop', () => (
  expect(shallow(<Filter onClick={onClick}>bar</Filter>).text()).toBe('bar')
));