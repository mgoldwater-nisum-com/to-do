import filter from 'filter-values';

const determineVisibleToDos = (visibility, toDos) => {
  switch (visibility) {
    case 'All':
      return toDos;
    case 'Active': 
      return filter(toDos, (value) => (
        value.completed === false
      ));
    case 'Completed': 
      return filter(toDos, (value) => (
        value.completed === true
      ));
  }
};

export default determineVisibleToDos;