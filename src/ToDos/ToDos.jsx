import React from 'react';
import ToDo from './ToDo/ToDo';

const ToDos = (props) => {
  return (
     <ul>
      {props.toDoList && props.toDoList.map( (item, i) => (
        <ToDo key={i} item={item} />
      ))}
    </ul>
  )
};

export default ToDos;