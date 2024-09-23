import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuickSortPage from './sortingPages/quickSortPage';
import BubbleSortPage from './sortingPages/bubbleSortPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Sorting Visualizer!</h1>} />
                <Route path="/quick-sort" element={<QuickSortPage />} />
                <Route path="/bubble-sort" element={<BubbleSortPage />} />
            </Routes>
        </Router>
    );
};

export default App;