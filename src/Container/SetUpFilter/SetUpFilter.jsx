import {toggleFilter} from '../../actions/actions.js';
import {connect} from 'react-redux';
import FilterToDos from '../../Presentational/FilterToDos/FilterToDos';

const mapStateToProps = (state) => {
  return {visible: state.visibleToDos};
};
  

const mapDispatchToProps = {
  toggleFilter: (filter) => toggleFilter(filter) 
};

const SetUpFilter = connect(mapStateToProps, mapDispatchToProps)(FilterToDos);

export default SetUpFilter;