import React from 'react';
import {shallow} from 'enzyme';
import FilterToDos from './FilterToDos';
import Filter from './Filter/Filter';

test('FilterToDos component renders', () => (
  expect(shallow(<FilterToDos/>).exists()).toBe(true)
));

test('Filter component is invoked 3 times', () => (
  expect(shallow(<FilterToDos/>).find(Filter)).toHaveLength(3)
));