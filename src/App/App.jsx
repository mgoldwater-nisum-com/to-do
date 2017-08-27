import React from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import ToDos from '../ToDos/ToDos';
import FilterToDos from '../FilterToDos/FilterToDos';

const App = () => (
  <div>
    <Header/>
    <AddToDo/>
    <ToDos/>
    <FilterToDos/>
  </div>
);

export default App;