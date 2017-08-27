import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDos from '../ToDos/ToDos';

const App = () => (
  <div>
    <Header/>
    <AddToDo/>
    <ToDos/>
  </div>
);

export default App;