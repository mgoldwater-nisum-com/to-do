import React from 'react';
import {shallow} from 'enzyme';
import Filter from './Filter';

const onClick = jest.fn();
const visible = 'foo';

test('Filter component renders', () => (
  expect(shallow(<Filter visible={visible} onClick={onClick}> foo </Filter>).exists()).toBe(true)
));

test('Filter component has the text of its children prop', () => (
  expect(shallow(<Filter visible={visible} onClick={onClick}>bar</Filter>).text()).toBe('bar')
));