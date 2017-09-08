import {connect} from 'react-redux';
import {toggleCompletion} from '../../actions/actions';
import ToDos from '../../Presentational/ToDos/ToDos';
import determineVisibleToDos from '../../helpers/determineVisibleToDos.js';

const mapStateToProps = (state) => {
  return {
    toDoList: determineVisibleToDos(state.visibleToDos, state.toDoList.allToDos),
    toDosInOrder: state.toDoList.toDosInOrder
  };
};

const mapDispatchToProps = {
  toggle: (id) => toggleCompletion(id)
};

const SetUpToggle = connect(mapStateToProps, mapDispatchToProps)(ToDos);

export default SetUpToggle;