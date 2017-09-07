import mongoose from 'mongoose';
if (process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost/testTodoList');
} else {
  mongoose.connect('mongodb://localhost/todoList');
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error')); // eslint-disable-line no-console
db.once('open', () => {
  // console.log('Connected!');
});

export const todosSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  text: String
});

export const todos = mongoose.model('todos', todosSchema);

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