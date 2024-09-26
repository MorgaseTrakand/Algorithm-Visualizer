import React from 'react';
import { selectionSort } from '../sortingAlgorithsm/selectionSort';
import SortingTemplate from '../sortingPageComponents/sortingTemplate';

const SelectionSortPage = () => {
    return <SortingTemplate sortFunction={selectionSort} title={'Selection Sort'} sortNumber={1}/>;
  };
  
  export default SelectionSortPage;
  