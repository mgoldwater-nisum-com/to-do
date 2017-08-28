import React from 'react';

const AddToDo = () => {
  let inputValue;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(inputValue.value);
      }}>
      <input type="text" ref={(input) => {
        inputValue = input;
      }}></input>
  </form>
  );
};

export default AddToDo;