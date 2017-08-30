const visibleToDos = (state='All', action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return action.visible
    default:
      return state;
  }
};

export default visibleToDos;
