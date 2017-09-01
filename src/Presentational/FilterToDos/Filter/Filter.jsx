import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.css';

const Filter = (props) => (
  <div className={style.size} onClick={() => props.onClick(props.children)}>{props.children}</div>
);

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;