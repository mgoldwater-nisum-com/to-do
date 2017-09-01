import React from 'react';
import PropTypes from 'prop-types';
import style from './AddToDo.css';

const AddToDo = (props) => {
  let inputValue;
  return (
    <form className={style.background} onSubmit={e => {
      e.preventDefault();
      props.dispatchToDo(inputValue.value);
      inputValue.value = '';
    }}>
      <input className={style.size} placeholder="What needs to be done?"type="text" ref={input => {
        inputValue = input;
      }}/>
    </form>
  );
};

AddToDo.propTypes = {
  dispatchToDo: PropTypes.func.isRequired
};

export default AddToDo;
