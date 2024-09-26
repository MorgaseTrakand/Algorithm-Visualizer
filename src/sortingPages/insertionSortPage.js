import React from 'react';
import { insertionSort } from '../sortingAlgorithsm/insertionSort';
import SortingTemplate from '../sortingPageComponents/sortingTemplate';

const InsertionSortPage = () => {
    return <SortingTemplate sortFunction={insertionSort} title={'Insertion Sort'} sortNumber={1}/>;
  };
  
  export default InsertionSortPage;
  