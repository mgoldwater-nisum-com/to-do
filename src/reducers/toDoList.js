const modifyToDoList = (state={toDosInOrder: [], allToDos: {} }, action) => {
  switch(action && action.type) {
    case 'ADD_TO_DO':
      const newState = Object.assign({}, state, {
        allToDos: {...state.allToDos, [action.id]: {
          id: action.id,
          completed: false,
          text: action.text
        }}
      });
      return Object.assign(newState, {toDosInOrder: [...newState.toDosInOrder, newState.allToDos[action.id]]});
    default: 
      return state;
  }
}

export default modifyToDoList;