import React from 'react';
import ReactDOM from 'react-dom';
import App from './Presentational/App/App';
import RootReducer from './reducers/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);