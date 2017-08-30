import {toggleFilter} from '../../actions/actions.js';
import {connect} from 'react-redux';
import FilterToDos from '../../Presentational/FilterToDos/FilterToDos';

const mapDispatchToProps = {
  toggleFilter: (filter) => toggleFilter(filter) 
};

const SetUpFilter = connect(null, mapDispatchToProps)(FilterToDos);

export default SetUpFilter;