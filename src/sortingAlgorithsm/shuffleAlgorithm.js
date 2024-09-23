import { delaySystem } from "./delayFunction";

export const shuffle = async (shuffledItems, setItems, getDelay) => {    
    for (let i = shuffledItems.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        while (j === i) {
            j = Math.floor(Math.random() * (i + 1));
        }

        let temp = shuffledItems[i].height
        shuffledItems[i].height = shuffledItems[j].height
        shuffledItems[j].height = temp
        shuffledItems[i].backgroundColor = shuffledItems[j].backgroundColor = 'red';
        setItems([...shuffledItems])

        await delaySystem(getDelay)      
        shuffledItems[i].backgroundColor = shuffledItems[j].backgroundColor = '#333A56'
        setItems([...shuffledItems])      
      }
}