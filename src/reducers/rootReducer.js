import {combineReducers} from 'redux';
import toDoList from './toDoList';
import visibleToDos from './visibleToDos';

const rootReducer = combineReducers({
  toDoList,
  visibleToDos
});

export default rootReducer;