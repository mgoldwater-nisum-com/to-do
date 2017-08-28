import React from 'react';

const AddToDo = () => {
  let inputValue;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      console.log(inputValue.value); // eslint-disable-line no-console
    }}>
      <input type="text" ref={input => {
        inputValue = input;
      }}/>
    </form>
  );
};

export default AddToDo;
