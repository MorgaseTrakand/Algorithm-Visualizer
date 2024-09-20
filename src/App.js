import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuickSortPage from './sortingPages/quickSortPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/quick-sort" element={<QuickSortPage />} />
                <Route path="/" element={<h1>Welcome to the Sorting Visualizer!</h1>} />
            </Routes>
        </Router>
    );
};

export default App;