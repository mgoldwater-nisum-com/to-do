import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => (
  <a onClick={() => props.onClick(props.children)}>{props.children}</a>
);

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Filter;