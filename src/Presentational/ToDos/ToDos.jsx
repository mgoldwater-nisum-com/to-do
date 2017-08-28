import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = (props) => {
  return (
    <ul>
      {props.toDoList && props.toDoList.map( (item) => (
        <ToDo key={item.id} item={item} />
      ))}
    </ul>
  );
};

ToDos.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default ToDos;