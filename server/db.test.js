import {todos} from './db';

test('new todo should be invalid if a property is missing', () => {
  const sampleToDo = new todos({id: 'foobar', text: 'bla'});
  sampleToDo.validate((err) => {
    expect(err.errors.completed).toBeTruthy();
  });
});

test('new todo should be invalid if a property is invalid', () => {
  const sampleToDo = new todos({id: 'foobar', completed: false, text: 'bla'});
  sampleToDo.validate((err) => {
    expect(err.errors.id).toBeTruthy();
  });
});