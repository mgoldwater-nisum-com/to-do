import React from 'react';
import {shallow} from 'enzyme';
import FilterToDos from './FilterToDos';
import Filter from './Filter/Filter';

const filterToDos = jest.fn();
const visible = 'foo';

test('FilterToDos component renders', () => (
  expect(shallow(<FilterToDos visible={visible} toggleFilter={filterToDos}/>).exists()).toBe(true)
));

test('Filter component is invoked 3 times', () => (
  expect(shallow(<FilterToDos visible={visible} toggleFilter={filterToDos}/>).find(Filter)).toHaveLength(3)
));