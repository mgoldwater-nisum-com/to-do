import React from 'react';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo';
import SetUpToggle from '../../Container/SetUpToggle';
import SetUpFilter from '../../Container/SetUpFilter';

const App = () => (
  <div>
    <Header/>
    <SetUpAddToDo/>
    <SetUpToggle/>
    <SetUpFilter/>
  </div>
);

export default App;