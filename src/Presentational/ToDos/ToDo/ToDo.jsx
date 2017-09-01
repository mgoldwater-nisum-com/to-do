import React from 'react';
import PropTypes from 'prop-types';
import style from './ToDo.css';

const ToDo = (props) => (
  <li className={style.removeBullets} onClick={props.onClick}>{props.item.text}</li>
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
