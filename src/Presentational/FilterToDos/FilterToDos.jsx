import React from 'react';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

const FilterToDos = (props) => (
  <div>
    {console.log(props.visible)}
    <Filter visible={props.visible} onClick={props.toggleFilter}>All</Filter>
    <Filter visible={props.visible} onClick={props.toggleFilter}>Active</Filter>
    <Filter visible={props.visible} onClick={props.toggleFilter}>Completed</Filter>
  </div>
);

FilterToDos.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  visible: PropTypes.string.isRequired
};

export default FilterToDos;