import React from 'react';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo';
import ToDos from '../ToDos/ToDos';
import FilterToDos from '../FilterToDos/FilterToDos';

const App = () => (
  <div>
    <Header/>
    <SetUpAddToDo/>
    <ToDos toDoList={[{id: 0, completed: false, text: 'test'}]}/>
    <FilterToDos/>
  </div>
);

export default App;