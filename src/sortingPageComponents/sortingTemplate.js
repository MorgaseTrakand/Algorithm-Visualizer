import React, { useState, useEffect, useRef} from 'react';
import { shuffle } from '../sortingAlgorithsm/shuffleAlgorithm';
import Header from './header';
import '../App.css';

function SortingTemplate( { sortFunction, sortNumber, title } ) {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isSorted, setIsSorted] = useState(true)
  const [sliderValue, setSliderValue] = useState(1000);
  const [paused, setPaused] = useState(false)
  const delayRef = useRef(1);
  const [items, setItems] = useState([]);
  //const [speed, setSpeed] = useState(20)

  //generates sorted array
  const generateSequentialItems = (length) => {
    const maxValue = length; 
    return Array.from({ length }, (_, index) => {
      const heightPercentage = (index + 1) / maxValue * 100;
      return {
        value: index + 1,
        height: heightPercentage,
        backgroundColor: ''
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
        if (sortNumber === 1) { 
            await sortFunction([...items], setItems, getDelay)
        } else {
            await sortFunction(0, items.length-1, [...items], setItems, getDelay)
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
        await shuffle([...items], setItems, getDelay)
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
      <div className='body'>
        <div className='first-block'> 
          <Header handleSortArray={handleSortArray} handleShuffleArray={handleShuffleArray} handlePause={handlePause} sliderValue={sliderValue} handleSliderChange={handleSliderChange} paused={paused}/>
          <div className="array-container">
            <h1 className='sort-title'>{title}</h1>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  id={`item-${index}`}
                  className="item"
                  style={{
                    height: `${item.height}%`,
                    background: item.backgroundColor
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>      
    </>
  );
}

export default SortingTemplate;
