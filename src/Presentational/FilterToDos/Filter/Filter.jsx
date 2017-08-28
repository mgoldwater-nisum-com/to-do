import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => (
  <a>{props.children}</a>
);

Filter.propTypes = {
  children: PropTypes.string.isRequired
};

export default Filter;