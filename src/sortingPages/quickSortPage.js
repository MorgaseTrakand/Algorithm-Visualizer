import React from 'react';
import { quickSort } from '../sortingAlgorithsm/quickSort';
import SortingTemplate from '../sortingPageComponents/sortingTemplate';

const QuickSortPage = () => {
    return <SortingTemplate sortFunction={quickSort}/>;
  };
  
  export default QuickSortPage;
  