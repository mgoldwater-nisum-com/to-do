import {addToDo, toggleCompletion, toggleFilter} from './actions.js';

test('calling the addToDo function returns an object with the type ADD_TO_DO, the id of the test and the passed in text', () => (
  expect(addToDo('wake up')).toEqual({type: 'ADD_TO_DO', id: 0, text: 'wake up'})
));

test('calling the addToDo function increments the id by 1', () => (
  expect(addToDo('exercise')).toEqual({type: 'ADD_TO_DO', id: 1, text: 'exercise'})
));

test('calling the toggleCompletion function returns an object with the type TOGGLE_COMPLETION and the passed in id', () => (
  expect(toggleCompletion(4)).toEqual({type: 'TOGGLE_COMPLETION', id: 4})
));

test('calling the toggleFilter function with no parameters returns an object with the type TOGGLE_FILTER and the visibility setting All', () => (
  expect(toggleFilter()).toEqual({type: 'TOGGLE_FILTER', visible: 'All'})
));

test('calling the toggleFilter function with no parameters returns an object with the type TOGGLE_FILTER and the visibility setting', () => (
  expect(toggleFilter('Active')).toEqual({type: 'TOGGLE_FILTER', visible: 'Active'})
));