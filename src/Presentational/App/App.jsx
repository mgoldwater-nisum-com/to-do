import React from 'react';
import Header from '../Header/Header';
import SetUpAddToDo from '../../Container/SetUpAddToDo/SetUpAddToDo';
import SetUpToggle from '../../Container/SetUpToggle/SetUpToggle';
import SetUpFilter from '../../Container/SetUpFilter/SetUpFilter';
import SetUpCounter from '../../Container/SetUpCounter/SetUpCounter';
import 'normalize.css';
import style from './App.css';



const App = () => (
  <div className={`${style.font} ${style.root}`}>
    <div className={`${style.border}`}>
      <Header/>
      <div className={`${style.appearance}`}>
        <SetUpAddToDo/>
        <SetUpToggle/>
        <SetUpFilter/>
        <SetUpCounter/>
      </div>
    </div>
  </div>
);

export default App;