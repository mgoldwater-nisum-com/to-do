import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = (props) => {
  console.log(props.showToDos);
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
      <div>foo</div>
    )
  } else {
    return (
      <div>bar</div>
    )
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