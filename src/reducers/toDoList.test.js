import modifyToDoList from './toDoList';

const setup = modifyToDoList;

test('returns the default state when no argument is passed in for state', () => (
  expect(setup()).toEqual({toDosInOrder: [], allToDos: {} })
));

test('when type is ADD_TO_DO it adds a to do to the allToDos object and that to do is referenced at the end of the toDosInOrder array', () => {
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
  }, toDosInOrder: [newState.allToDos[action.id]]  
  })
})

test('returns the current state when state is not modified', () => {
  const state = setup();
  expect(modifyToDoList(state, {type: 'foo'})).toBe(state)
});

