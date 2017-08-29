import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = (props) => {
  let inputValue;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log(inputValue.value); // eslint-disable-line no-console
      props.dispatchToDo(inputValue.value);
      inputValue.value = '';
    }}>
      <input type="text" ref={input => {
        inputValue = input;
      }}/>
    </form>
  );
};

AddToDo.propTypes = {
  dispatchToDo: PropTypes.func.isRequired
};

export default AddToDo;
