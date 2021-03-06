import React from 'react';
import ToDo from './ToDo/ToDo';
import PropTypes from 'prop-types';
import style from './ToDos.css';

const ToDos = (props) => {
  return (
    <ul className={style.padding}>
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