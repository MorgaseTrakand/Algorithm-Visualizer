import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuickSortPage from './sortingPages/quickSortPage';
import BubbleSortPage from './sortingPages/bubbleSortPage';
import SelectionSortPage from './sortingPages/selectSortPage';
import InsertionSortPage from './sortingPages/insertionSortPage';

import PathfindingTemplate from './pathfindingPageComponents/pathfindingTemplate';

import MainPage from './MainPage/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/quick-sort" element={<QuickSortPage />} />
                <Route path="/bubble-sort" element={<BubbleSortPage />} />
                <Route path="/selection-sort" element={<SelectionSortPage />} />
                <Route path="/insertion-sort" element={<InsertionSortPage />} />

                <Route path="/grid" element={<PathfindingTemplate />} />
            </Routes>
        </Router>
    );
};

export default App;