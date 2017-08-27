import React from 'react';
import {shallow} from 'enzyme';
import FilterToDos from './FilterToDos';

test('FilterToDos component renders', () => (
  expect(shallow(<FilterToDos/>).exists()).toBe(true)
));