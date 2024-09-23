import React from 'react';

const Header = ({ handleSortArray, handleShuffleArray, handlePause, sliderValue, handleSliderChange, paused}) => {


  return (
    <>
      <header>
        <h1>Sorting Visualizer</h1>
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
            style={{ cursor: 'pointer' }}
          >
            {paused ? 'Resume' : 'Pause'}
          </h1>
          <div className="slider">
            <h1 className='size-title'>Size: {sliderValue}</h1>
            <input
              type="range"
              min="10"
              max="300"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              style={{ '--c': 'lightblue', '--l': '6px', '--g': '12px' }}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
