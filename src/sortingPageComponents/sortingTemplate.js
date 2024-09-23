import React, { useState, useEffect, useRef} from 'react';
import { shuffle } from '../sortingAlgorithsm/shuffleAlgorithm';
import Header from './header';
import '../App.css';

function SortingTemplate( { sortFunction, sortNumber } ) {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isSorted, setIsSorted] = useState(true)
  const [sliderValue, setSliderValue] = useState(50);
  const [paused, setPaused] = useState(false)
  const delayRef = useRef(1000);
  const [items, setItems] = useState([]);

  //generates sorted array
  const generateSequentialItems = (length) => {
    const maxValue = length; 
    return Array.from({ length }, (_, index) => {
      const heightPercentage = (index + 1) / maxValue * 100;
      return {
        value: index + 1,
        backgroundColor: '#333A56',
        height: heightPercentage
      };
    });
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
    const arrayBars = [...items]
    if (!isAnimation) {
        setIsSorted(false)
        setIsAnimation(true)
        await shuffle(arrayBars, setItems, getDelay)
        setIsAnimation(false)
    }
  }

  const getDelay = () => {
    return delayRef.current
  };

  const handlePause = () => {
    if (isAnimation) {
      if (paused) {
        delayRef.current = 100
        setPaused(false)
      }
      else {
        delayRef.current = 1000000
        setPaused(true)
      }
    }
  }


  return (
    <>
      <Header handleSortArray={handleSortArray} handleShuffleArray={handleShuffleArray} handlePause={handlePause} sliderValue={sliderValue} handleSliderChange={handleSliderChange} paused={paused}/>
      <div className="array-container">
        <h1 className='sort-title'>Quick Sort</h1>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{
                height: `${item.height}%`,
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
