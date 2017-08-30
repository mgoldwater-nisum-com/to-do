import visibleToDos from './visibleToDos';

test('visibleToDo returns the current state when the passed in action does not have the type of TOGGLE_FILTER', () => (
  expect(visibleToDos({}, {type: false})).toEqual({})
));

test('When the passed in action has the type of TOGGLE_FILTER visibleToDO returns a new state object with the value of the actions visible property', () => {
  let state = visibleToDos({}, {type: 'TOGGLE_FILTER', visible: 'Completed'});
  expect(visibleToDos(state, {type: 'TOGGLE_FILTER', visible: 'Active'})).not.toBe(state);
  expect(visibleToDos(state, {type: 'TOGGLE_FILTER', visible: 'All'})).toBe('All');
});