import React from 'react';
import Counter, {itemOrItems} from './Counter';
import {shallow} from 'enzyme';
import style from './Counter.css';

const props = {
  itemsTotal: 2,
  itemsRemaining: 1,
  itemsDone: 1 
};

test('When 1 is passed into ItemOrItems Item is returned', () => (
  expect(itemOrItems(1)).toBe('Item')
));

test('When a number not equal to one is passed into itemOrItems Items is returned', () => (
  expect(itemOrItems(2)).toBe('Items')
));

test('Counter component renders', () => (
  expect(shallow(<Counter {...props}/>).exists()).toBe(true)
));

test('Counter component renders 3 divs with the class name style.counter', () => (
  expect(shallow(<Counter {...props}/>).find(`.${style.counter}`)).toHaveLength(3)
));