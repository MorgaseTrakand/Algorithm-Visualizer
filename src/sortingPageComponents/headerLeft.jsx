import React from 'react';

const HeaderLeft = ( { handlePause, handleShuffleArray, handleSliderChange, handleSortArray, sliderValue, paused } ) => {


  return (
    <>
        <div className="header-left">
            <div className='width-100'>
                <h1
                    onClick={() => handleSortArray()}
                    style={{ cursor: 'pointer' }}
                >
                    Sort
                </h1>
            </div>

            <div className='width-100'>
                <h1
                    onClick={() => handleShuffleArray()}
                    style={{ cursor: 'pointer' }}
                >
                    Shuffle
                </h1>
            </div>

            <div className='width-100'>
                <h1
                    onClick={() => handlePause()}
                    style={{ cursor: 'pointer' }}
                >
                    {paused ? 'Resume' : 'Pause'}
                </h1>
            </div>

            <div className='width-100'>
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

        </div>
    </>
  );
}

export default HeaderLeft;
