import React from 'react';
import {shallow} from 'enzyme';
import Filter from './Filter';

test('Filter component renders', () => (
  expect(shallow(<Filter> foo </Filter>).exists()).toBe(true)
));

test('Filter component has the text of its children prop', () => (
  expect(shallow(<Filter>bar</Filter>).text()).toBe('bar')
));