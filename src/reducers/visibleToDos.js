const visibleToDos = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return {
        visible: action.visible
      };
    default:
      return state;
  }
};

export default visibleToDos;
