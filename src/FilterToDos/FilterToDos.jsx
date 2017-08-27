import React from 'react';
import Filter from './Filter/Filter';

const FilterToDos = () => (
  <div>
    <Filter> All </Filter>
    <Filter> Active </Filter>
    <Filter> Completed </Filter>
  </div>
);

export default FilterToDos;