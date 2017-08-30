import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = (props) => {
  if (props.showToDos === 'All') {
    return (
      <ul>
        {props.toDosInOrder && props.toDosInOrder.map( (item) => (
          <ToDo onClick={() => props.toggle(props.toDoList[item].id)} key={props.toDoList[item].id} item={props.toDoList[item]} />
        ))}
      </ul>
    );
  } else if (props.showToDos === 'Active') {
    return (
      <ul>
        {props.toDosInOrder && props.toDosInOrder.filter( (item) => (
         props.toDoList[item].completed === false
        )).map( (item) => (
          <ToDo onClick={() => props.toggle(props.toDoList[item].id)} key={props.toDoList[item].id} item={props.toDoList[item]} />
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {props.toDosInOrder && props.toDosInOrder.filter( (item) => (
         props.toDoList[item].completed === true
        )).map( (item) => (
          <ToDo onClick={() => props.toggle(props.toDoList[item].id)} key={props.toDoList[item].id} item={props.toDoList[item]} />
        ))}
      </ul>
    );
  } 
};

ToDos.propTypes = {
  //Object of objects with numerical keys (well really strings)
  toDoList: PropTypes.any,
  toDosInOrder: PropTypes.arrayOf(PropTypes.number),
  toggle: PropTypes.func.isRequired,
  showToDos: PropTypes.string.isRequired
};

export default ToDos;