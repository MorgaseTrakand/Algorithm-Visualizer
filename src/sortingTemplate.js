import React, { useState, useEffect} from 'react';
import { shuffle } from './sortingAlgorithsm/shuffleAlgorithm';
import './App.css';

function SortingTemplate( { sortFunction } ) {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isSorted, setIsSorted] = useState(true)
  const [sliderValue, setSliderValue] = useState(50);
  const [items, setItems] = useState([]);

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

  const handleSortArray = async () => {
    if (!isAnimation && !isSorted) {
        setIsAnimation(true)
        const arr = [...items]
        await sortFunction(0, arr.length-1, arr, setItems)
        setIsAnimation(false)
        setIsSorted(true)
    }
  };
  const handleShuffleArray = async () => {
    //setIsSorted setIsAnimation 
    if (!isAnimation) {
        setIsSorted(false)
        setIsAnimation(true)
        let shuffledItems = [...items];
        await shuffle(shuffledItems, setItems)
        setIsAnimation(false)
    }
  }

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

export default SortingTemplate;
