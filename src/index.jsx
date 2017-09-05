import React from 'react';
import ReactDOM from 'react-dom';
import App from './Presentational/App/App';
import RootReducer from './reducers/rootReducer';
import {changeId} from './actions/actions.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

fetch('/todos').then((results) => {
  return results.json();
}).then( (resultsArr) => {
  const existingToDos = {toDoList: {allToDos: {}, toDosInOrder: []}}
  resultsArr.forEach((item) => {
    existingToDos.toDoList.allToDos[item.id] = item;
    existingToDos.toDoList.toDosInOrder.push(item.id);
    changeId();
  });
  let store = createStore(
  RootReducer,
  existingToDos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  console.log(store.getState());

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    document.getElementById('root')
  );
}) ;