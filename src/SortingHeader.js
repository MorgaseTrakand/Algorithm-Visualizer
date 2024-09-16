import React, { useState, useEffect } from 'react';
import './App.css';

function SortingHeader() {
  // Slider value for updating array
  const [sliderValue, setSliderValue] = useState(50);
  const [items, setItems] = useState([]);

  // Generate random items with value and default color
  const generateRandomItems = (length) => {
    return Array.from({ length }, () => ({
      value: Math.floor(Math.random() * 100) + 1,
      backgroundColor: 'lightgray' // Default color
    }));
  };

  // Update items whenever slider value changes
  useEffect(() => {
    setItems(generateRandomItems(sliderValue));
  }, [sliderValue]);

  // Handle slider value change
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Handle Play button click
  function handlePlayClick(i, color) {
    // Create a new array with updated items
    const updatedArray = items.map((item, index) =>
      index === i ? { ...item, backgroundColor: color } : item
    );
    setItems(updatedArray);
  }

  // Calculate maxValue based on item values
  const maxValue = Math.max(...items.map(item => item.value), 1); // Avoid division by zero

  return (
    <>
      <header>
        <h1>Home</h1>
        <div className="header-left">
        <h1
          onClick={() => handlePlayClick(2, 'red')} // Use an arrow function to call handlePlayClick with arguments
          style={{ cursor: 'pointer' }}
        >
          Play
        </h1>
          <h1>Range</h1>
          <div className="slider">
            <input
              type="range"
              min="10"
              max="80"
              step="1"
              value={sliderValue} // Set the value of the slider
              onChange={handleSliderChange} // Handle slider value change
              style={{ '--c': 'lightblue', '--l': '6px', '--g': '12px' }}
            />
            <h1>Size: {sliderValue}</h1> {/* Display the current value of the slider */}
          </div>
        </div>
      </header>
    </>
  );
}

export default SortingHeader;
