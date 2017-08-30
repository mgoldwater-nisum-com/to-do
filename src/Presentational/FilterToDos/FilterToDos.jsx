import React from 'react';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

const FilterToDos = (props) => (
  <div>
    <Filter onClick={props.toggleFilter}>All</Filter>
    <Filter onClick={props.toggleFilter}>Active</Filter>
    <Filter onClick={props.toggleFilter}>Completed</Filter>
  </div>
);

FilterToDos.propTypes = {
  toggleFilter: PropTypes.func.isRequired
};

export default FilterToDos;