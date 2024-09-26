import React from 'react';
import { bubbleSort } from '../sortingAlgorithsm/bubbleSort';
import SortingTemplate from '../sortingPageComponents/sortingTemplate';

const BubbleSortPage = () => {
    return <SortingTemplate sortFunction={bubbleSort} sortNumber={1} title={'Bubble Sort'}/>;
  };
  
  export default BubbleSortPage;
  