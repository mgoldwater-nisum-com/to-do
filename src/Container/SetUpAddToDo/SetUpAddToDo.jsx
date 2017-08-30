import {connect} from 'react-redux';
import {addToDo as newToDo} from '../../actions/actions.js';
import AddToDo from '../../Presentational/AddToDo/AddToDo.jsx';

const mapDispatchToProps = {
  dispatchToDo: newToDo
};

const SetUpAddToDo = connect(null, mapDispatchToProps)(AddToDo);

export default SetUpAddToDo;

