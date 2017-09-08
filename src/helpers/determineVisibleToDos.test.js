import determineVisibleToDos from './determineVisibleToDos';

const sampleToDoList = {
  0: {
    id: 0,
    completed: false,
    text: 'foo'
  },
  1: {
    id: 1,
    completed: true,
    text: 'bar'
  }
};

test('all toDos are returned when visibleToDos is set to All', () => {
  expect(determineVisibleToDos('All', sampleToDoList)).toEqual({0: {id: 0, completed: false, text: 'foo'}, 1: {id: 1, completed: true, text: 'bar'}
  });
});

test('Uncompleted toDos are returned when visibleToDos is set to Active', () => {
  expect(determineVisibleToDos('Active', sampleToDoList)).toEqual({0: {id: 0, completed: false, text: 'foo'}
  });
});

test('Completed toDos are returned when visibleToDos is set to Completed', () => {
  expect(determineVisibleToDos('Completed', sampleToDoList)).toEqual({1: {id: 1, completed: true, text: 'bar'}
  });
});