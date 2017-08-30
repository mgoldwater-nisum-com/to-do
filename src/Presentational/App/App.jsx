import React from 'react';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo';
import SetUpToggle from '../../Container/SetUpToggle';
import FilterToDos from '../FilterToDos/FilterToDos';

const App = () => (
  <div>
    <Header/>
    <SetUpAddToDo/>
    <SetUpToggle/>
    <FilterToDos/>
  </div>
);

export default App;