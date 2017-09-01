import React from 'react';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo/SetUpAddToDo';
import SetUpToggle from '../../Container/SetUpToggle/SetUpToggle';
import SetUpFilter from '../../Container/SetUpFilter/SetUpFilter';
import 'normalize.css';
import style from './App.css';



const App = () => (
  <div className={`${style.font} ${style.root}`}>
    <div className={`${style.border}`}>
      <Header/>
      <div className={`${style.size} ${style.toDoBackground}`}>
        <SetUpAddToDo/>
        <SetUpToggle/>
        <SetUpFilter/>
      </div>
    </div>
  </div>
);

export default App;