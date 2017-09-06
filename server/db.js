import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/todoList');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error')); // eslint-disable-line no-console
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

export const addToDo = ({id, completed, text}, res) => {
  const newToDo = new todos({id, completed, text});
  newToDo.save( (err) => {
    if (err) return console.error(err); // eslint-disable-line no-console
    res.sendStatus(200);
  });
};

export const toggleToDoCompletion = ({id, completed}, cb) => {
  todos.findOneAndUpdate({id}, {completed: !completed}, cb);
};
