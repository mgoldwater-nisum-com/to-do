import React from 'react';
import PropTypes from 'prop-types';

const ToDo = (props) => (
  <li>{props.item.text}</li>
);

ToDo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default ToDo;
