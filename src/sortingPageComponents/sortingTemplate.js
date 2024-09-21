import React, { useState, useEffect, useRef} from 'react';
import { shuffle } from '../sortingAlgorithsm/shuffleAlgorithm';
import Header from './header';
import '../App.css';

function SortingTemplate( { sortFunction, sortNumber } ) {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isSorted, setIsSorted] = useState(true)
  const [sliderValue, setSliderValue] = useState(50);
  const [paused, setPaused] = useState(false)
  const delayRef = useRef(50);
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

  //set paused to false when animation ends
  useEffect(() => {
    if (!isAnimation) {
      setPaused(false)
    }
  }, [isAnimation])

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
    if (isAnimation) {
      if (paused) {
        delayRef.current = 10
        setPaused(false)
      }
      else {
        delayRef.current = 1000000
        setPaused(true)
      }
    }
  }

  const maxValue = Math.max(...items.map(item => item.value), 1);

  return (
    <>
      <Header handleSortArray={handleSortArray} handleShuffleArray={handleShuffleArray} handlePause={handlePause} sliderValue={sliderValue} handleSliderChange={handleSliderChange} paused={paused}/>
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
