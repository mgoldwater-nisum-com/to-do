import React from 'react';
import {shallow} from 'enzyme';
import ToDos from './ToDos';

test('Todos component renders', () => (
  expect(shallow(<ToDos/>).exists()).toBe(true)
));