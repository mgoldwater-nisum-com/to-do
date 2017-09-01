import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.css';

const Filter = (props) => (
  <div className={`${style.size} ${props.visible === props.children ? style.background : null}`} onClick={() => props.onClick(props.children)}>{props.children}</div>
);

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.string.isRequired
};

export default Filter;