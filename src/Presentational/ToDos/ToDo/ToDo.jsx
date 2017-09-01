import React from 'react';
import PropTypes from 'prop-types';
import style from './ToDo.css';

const ToDo = (props) => (
  <div className={`${style.outerList} ${style.group}`}>
    <div className={style.circle}></div>
    <li className={`${style.listItem}`} onClick={props.onClick}>{props.item.text}</li>
  </div>
);

ToDo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToDo;
