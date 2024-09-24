import { delaySystem } from "./delayFunction";

export const bubbleSort = async (array, setItems, getDelay) => {   
    let currentMax = 0

    for (let i = 0; i < array.length; i++) {
        currentMax = array[0].height
        for (let j = 0; j < array.length - 1 - i; j++) {
            array[j].backgroundColor = 'red'
            if (array[j + 1].height < array[j].height) { 
                await delaySystem(getDelay);
                [array[j].height, array[j+1].height] = [array[j+1].height, array[j].height]
                array[j+1].backgroundColor = 'red';

                if (array[j+1].height > currentMax) {
                    currentMax = array[j+1].height;
                }
                setItems([...array]);
            }
            array[j].backgroundColor = '#333A56';
        }
        array[array.length - 1 - i].backgroundColor = '#333A56'
        currentMax = 0
    }
    setItems([...array]);
};
