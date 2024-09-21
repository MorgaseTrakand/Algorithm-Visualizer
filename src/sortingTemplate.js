import React, { useState, useEffect, useRef} from 'react';
import { shuffle } from './sortingAlgorithsm/shuffleAlgorithm';
import './App.css';

function SortingTemplate( { sortFunction, sortNumber } ) {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isSorted, setIsSorted] = useState(true)
  const [sliderValue, setSliderValue] = useState(50);
  const [items, setItems] = useState([]);
  const [paused, setPaused] = useState(false)
  const delayRef = useRef(100);

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
    if (!isAnimation) {
        setSliderValue(event.target.value);
    }
  };

  //calls current sort function
  const handleSortArray = async () => {
    if (!isAnimation && !isSorted) {
        setIsAnimation(true)
        const arr = [...items]
        if (sortNumber === 1) { 
            await sortFunction(arr, setItems, getDelay)
        } else {
            await sortFunction(0, arr.length-1, arr, setItems, getDelay)
        }
        setIsAnimation(false)
        setIsSorted(true)
    }
  };

  //calls shuffle function
  const handleShuffleArray = async () => {
    if (!isAnimation) {
        setIsSorted(false)
        setIsAnimation(true)
        let shuffledItems = [...items];
        await shuffle(shuffledItems, setItems, getDelay)
        setIsAnimation(false)
    }
  }
  const getDelay = () => {
    return delayRef.current
  };

  const handlePause = () => {
    if (paused) {
      delayRef.current = 10
      setPaused(false)
    }
    else {
      delayRef.current = 1000000
      setPaused(true)
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
          <h1
            onClick={() => handlePause()}
          >
            {paused ? 'Resume' : 'Pause'}
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
