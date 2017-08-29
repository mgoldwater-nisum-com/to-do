const modifyToDoList = (state={toDosInOrder: [], allToDos: {} }, action) => {
  switch(action && action.type) {
    case 'ADD_TO_DO':
      return Object.assign(...state, {
        allToDos: {...state.allToDos, [action.id]: {
          id: action.id,
          completed: false,
          text: action.text
        }}, toDosInOrder: [...state.toDosInOrder, action.id]}
      );
    case 'TOGGLE_COMPLETION': 
      return {...state, toDosInOrder: [...state.toDosInOrder], allToDos: {
        ...state.allToDos,
        [action.id]: {
          ...state.allToDos[action.id],
          completed: !state.allToDos[action.id].completed
        }
      }};
    default: 
      return state;
  }
};

export default modifyToDoList;