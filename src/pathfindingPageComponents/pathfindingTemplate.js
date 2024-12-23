import React, {useEffect, useState} from "react";
import '../pathfinding.css';

function PathfindingTemplate() {
    const [grid, setGrid] = useState([])
    useEffect(() => {
        setGrid(generateGridItems(5000))
      }, []);
    
      const generateGridItems = (length) => {
        return Array.from({ length }, (_, index) => {
          return {
            value: index + 1,
            backgroundColor: ''
          };
        });
      };

    return (
        <>
            <div className="grid-container">
                {grid.map((item, index) => {
                return (
                    <div
                    key={index}
                    id={`grid-item-${index}`}
                    className="grid-item"
                    style={{
                        background: item.backgroundColor
                    }}
                    ></div>
                );
                })}
            </div>
        </>
    );
}
export default PathfindingTemplate