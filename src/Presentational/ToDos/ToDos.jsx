import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = (props) => {
  return (
    <ul>
      {Object.keys(props.toDoList).map( (item) => (
        <ToDo onClick={() => props.toggle(props.toDoList[item].id)} key={props.toDoList[item].id} item={props.toDoList[item]}/>
      ))}
    </ul>
  );
};

ToDos.propTypes = {
  //Object of objects with numerical keys (well really strings)
  toDoList: PropTypes.any
};

export default ToDos;