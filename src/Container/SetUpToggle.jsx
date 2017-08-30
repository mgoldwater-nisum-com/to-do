import {dispatch} from 'redux';
import {connect} from 'react-redux';
import {toggleToDo} from '../actions/actions';
import ToDos from '../Presentational/ToDos/ToDos';

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList.allToDos,
    toDosInOrder: state.toDoList.toDosInOrder
  };
};

const mapDispatchToProps = {
  toggleToDo: (id) => dispatch(toggleToDo(id))
};

const SetUpToggle = connect(mapStateToProps, mapDispatchToProps)(ToDos);

export default SetUpToggle;