import Counter from '../../Presentational/Counter/Counter';
import {connect} from 'react-redux';
import determineVisibleToDos from '../../helpers/determineVisibleToDos.js';

const mapStateToProps = (state) => {
  return {
    itemsTotal: Object.keys(state.toDoList.allToDos).length,
    itemsRemaining: Object.keys(determineVisibleToDos('Active', state.toDoList.allToDos)).length,
    itemsDone: Object.keys(determineVisibleToDos('Completed', state.toDoList.allToDos)).length
  };
};

const SetUpCounter = connect(mapStateToProps)(Counter);

export default SetUpCounter;
