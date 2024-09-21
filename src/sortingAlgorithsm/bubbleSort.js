export const bubbleSort = async (array, setItems, getDelay) => {   
    let lastIndexes = [] 
    const length = array.length;
    let currentMax = 0

    for (let i = 0; i < length; i++) {
        currentMax = array[0].value
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j + 1].value < array[j].value) { 
                let delay = getDelay();
                while (true) {
                    if (delay < 1000000) break;
                    delay = getDelay();
                    await new Promise(resolve => setTimeout(resolve, 50))
                }
    
                await new Promise(resolve => setTimeout(resolve, delay));
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                array[j+1].backgroundColor = 'red';

                if (array[j+1].value > currentMax) {
                    currentMax = array[j+1].value
                    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
                    lastIndexes = [array[j+1]];
                }
                setItems([...array]);
            }
        }
        currentMax = 0
    }
    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
    setItems([...array]);
};
