let id = 0;

export const changeId = () => {
  id++;
}

export const addToDo = (text) => {
  return {
    type: 'ADD_TO_DO',
    id: id++,
    text
  };
};

export const toggleCompletion = (id) => {
  return {
    type: 'TOGGLE_COMPLETION',
    id
  };
};

export const toggleFilter = (visible='All') => {
  return {
    type: 'TOGGLE_FILTER',
    visible
  };
};