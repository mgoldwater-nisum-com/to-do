import React from 'react';
import {shallow} from 'enzyme';
import FilterToDos from './FilterToDos';
import Filter from './Filter/Filter';

const filterToDos = jest.fn();

test('FilterToDos component renders', () => (
  expect(shallow(<FilterToDos toggleFilter={filterToDos}/>).exists()).toBe(true)
));

test('Filter component is invoked 3 times', () => (
  expect(shallow(<FilterToDos toggleFilter={filterToDos}/>).find(Filter)).toHaveLength(3)
));