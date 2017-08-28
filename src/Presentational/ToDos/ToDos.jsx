import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = (props) => {
  return (
    <ul>
      {props.toDoList && props.toDoList.map( (item, i) => (
        <ToDo key={i} item={item} />
      ))}
    </ul>
  );
};

ToDos.propTypes = {
  toDoList: PropTypes.array.isRequired
};

export default ToDos;