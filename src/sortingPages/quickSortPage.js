import React from 'react';
import { quickSort } from '../sortingAlgorithsm/quickSort';
import SortingTemplate from '../sortingPageComponents/sortingTemplate';

const QuickSortPage = () => {
    return <SortingTemplate sortFunction={quickSort} title={'Quick Sort'}/>;
  };
  
  export default QuickSortPage;
  