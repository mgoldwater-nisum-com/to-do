import React from 'react';
import PropTypes from 'prop-types';

const ToDo = (props) => (
  <li>{props.item}</li>
);

ToDo.propTypes = {
  item: PropTypes.string.isRequired
};

export default ToDo;
