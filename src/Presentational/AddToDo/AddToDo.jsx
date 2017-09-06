import React from 'react';
import PropTypes from 'prop-types';
import style from './AddToDo.css';

const AddToDo = (props) => {
  let inputValue;
  return (
    <form className={style.background} onSubmit={e => {
      e.preventDefault();
      const createdAction = props.dispatchToDo(inputValue.value);
      fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...createdAction, completed: false})
      });
      inputValue.value = '';
    }}>
      <input className={style.input} placeholder="What needs to be done?"type="text" ref={input => {
        inputValue = input;
      }}/>
    </form>
  );
};

AddToDo.propTypes = {
  dispatchToDo: PropTypes.func.isRequired
};

export default AddToDo;
