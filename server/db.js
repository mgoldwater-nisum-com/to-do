import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/todoList');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  // console.log('Connected!');
});

export const todosSchema = mongoose.Schema({
  id: Number,
  completed: Boolean,
  text: String
});

const todos = mongoose.model('todos', todosSchema);

export const getToDos = (cb) => {
  todos.find( (err, todoList) => {
    cb(todoList);
  });
};
