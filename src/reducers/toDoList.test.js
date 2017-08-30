import modifyToDoList from './toDoList';

const setup = modifyToDoList;

test('returns the default state when no argument is passed in for state', () => (
  expect(setup()).toEqual({toDosInOrder: [], allToDos: {} })
));

test('when type is ADD_TO_DO it adds a to do to the allToDos object and that todo id is stored at the end of the toDosInOrder array', () => {
  const initialState = setup();
  const action = {type: 'ADD_TO_DO', id: 0, text: 'shower'};
  let newState = modifyToDoList(initialState, action);
  expect(newState).toEqual({
    allToDos: {
      [action.id]: {
        text: action.text,
        completed: false,
        id: action.id
      }
    }, toDosInOrder: [action.id]  
  });
  const action2 = {type: 'ADD_TO_DO', id: 1, text: 'shave'};
  let newState2 = modifyToDoList(newState, action2);
  expect(newState2).toEqual({
    allToDos: {
      0: {
        text: 'shower',
        completed: false,
        id: 0
      },
      1: {
        text: 'shave',
        completed: false,
        id: 1
      }
    }, toDosInOrder: [0, 1]  
  });
});

test('when type is TOGGLE_COMPLETION it changes the value of a todos completed property from false to true or vice versa', () => {
  const initialState = setup();
  const toDoListOfOneToDo = modifyToDoList(initialState, {type: 'ADD_TO_DO', id: 0, text: 'wash the dishes'});
  const toggledOnce = modifyToDoList(toDoListOfOneToDo, {type: 'TOGGLE_COMPLETION', id: 0});
  expect(toggledOnce).toEqual({toDosInOrder: [0], allToDos: {0: {id: 0, text: 'wash the dishes', completed: true}}});
  expect(modifyToDoList(toggledOnce, {type: 'TOGGLE_COMPLETION', id: 0})).toEqual({toDosInOrder: [0], allToDos: {0: {id: 0, text: 'wash the dishes', completed: false}}});
});

test('returns the current state when state is not modified', () => {
  const state = setup();
  expect(modifyToDoList(state, {type: 'foo'})).toBe(state);
});

