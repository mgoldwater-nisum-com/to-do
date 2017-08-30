import {connect} from 'react-redux';
import {toggleCompletion} from '../../actions/actions';
import ToDos from '../../Presentational/ToDos/ToDos';
import filter from 'filter-values';

export const determineVisibleToDos = (visibility, toDos) => {
  switch (visibility) {
    case 'All':
      return toDos;
    case 'Active': 
      return filter(toDos, (value) => (
        value.completed === false
      ));
    case 'Completed': 
      return filter(toDos, (value) => (
        value.completed === true
      ));
  }
};

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