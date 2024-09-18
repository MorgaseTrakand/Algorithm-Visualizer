import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const quickSort = async (low, high, array) => {
    if (low < high) {
        const pivotIndex = await partition(low, high, array);
        await quickSort(low, pivotIndex - 1, array); // Wait for left side
        await quickSort(pivotIndex + 1, high, array); // Wait for right side
    }
};

async function partition(low, high, arr) {
    let pivotValue = arr[high].value;
    let i = low - 1;
    let lastIndexes = []

    for (let j = low; j < high; j++) {
        if (arr[j].value <= pivotValue) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            setItems([...arr]); // Update state here
            arr[i].backgroundColor = 'red';
            arr[j].backgroundColor = 'red';
            lastIndexes.forEach(item => item.backgroundColor = '#333A56');
            lastIndexes = [arr[i], arr[j]];
            // Introduce a delay to visualize the step
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setItems([...arr]); // Final state update after partition
    return i + 1;
}

  const [sliderValue, setSliderValue] = useState(50);
  const [items, setItems] = useState([]);
  const shuffleTimeoutRef = useRef(null);
  const sortTimeoutRef = useRef(null);

  //generates sorted array
  const generateSequentialItems = (length) => {
    return Array.from({ length }, (_, index) => ({
      value: index + 1,
      backgroundColor: '#333A56'
    }));
  };
  //sets array into state, rerun function if sliderValue (length) changes
  useEffect(() => {
    setItems(generateSequentialItems(sliderValue));
  }, [sliderValue]);

  //changes size of array
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSortArray = () => {
    if (sortTimeoutRef.current) {
      clearTimeout(sortTimeoutRef.current)
    }
    const arr = [...items]
    quickSort(0, arr.length-1, arr)
  };

  const handleShuffleArray = async () => {
    // Clear any existing timeout to prevent multiple shuffle operations
    if (shuffleTimeoutRef.current) {
      clearTimeout(shuffleTimeoutRef.current);
    }

    const shuffledItems = [...items];
    let lastIndexs = [];

    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
      shuffledItems[i].backgroundColor = 'red';
      shuffledItems[j].backgroundColor = 'red';
      lastIndexs.forEach(item => item.backgroundColor = '#333A56');
      lastIndexs = [shuffledItems[i], shuffledItems[j]];

      setItems([...shuffledItems]);
      
      await new Promise(resolve => shuffleTimeoutRef.current = setTimeout(resolve, 50));
    }
    // clear color form last items
    lastIndexs.forEach(item => item.backgroundColor = '#333A56');
    setItems([...shuffledItems])
  };

  const maxValue = Math.max(...items.map(item => item.value), 1);
  return (
    <>
      <header>
        <h1>Home</h1>
        <div className="header-left">
          <h1
              onClick={() => handleSortArray()}
              style={{ cursor: 'pointer' }}
            >
              Sort
          </h1>
          <h1
            onClick={() => handleShuffleArray()}
            style={{ cursor: 'pointer' }}
          >
            Shuffle
          </h1>
          <div className="slider">
            <input
              type="range"
              min="10"
              max="1000"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              style={{ '--c': 'lightblue', '--l': '6px', '--g': '12px' }}
            />
            <h1>Size: {sliderValue}</h1>
          </div>
        </div>
      </header>
      <div className="array-container">
        {items.map((item, index) => {
          const heightPercentage = maxValue ? (item.value / maxValue) * 100 : 0;
          return (
            <div
              key={index}
              className="item"
              style={{
                height: `${heightPercentage}%`,
                backgroundColor: item.backgroundColor
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
