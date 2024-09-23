import { gsap } from 'gsap';

export const quickSort = async (low, high, array, setItems, getDelay) => {
    if (low < high) {
        const pivotIndex = await partition(low, high, array, setItems, getDelay);
        await quickSort(low, pivotIndex - 1, array, setItems, getDelay);
        await quickSort(pivotIndex + 1, high, array, setItems, getDelay);
    }
  };

  async function partition(low, high, arr, setItems, getDelay) {
    let pivotValue = arr[high].value;
    let i = low - 1;
    let lastIndexes = []

    for (let j = low; j < high; j++) {
        if (arr[j].value <= pivotValue) {
            let delay = getDelay();
            while (true) {
                if (delay < 1000000) break;
                delay = getDelay();
                await new Promise(resolve => setTimeout(resolve, 50))
            }

            await new Promise(resolve => setTimeout(resolve, delay));
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            setItems([...arr]);
            arr[i].backgroundColor = 'red';
            arr[j].backgroundColor = 'red';
            lastIndexes.forEach(item => item.backgroundColor = '#333A56');
            lastIndexes = [arr[i], arr[j]];
        }
    }
    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setItems([...arr]);
    return i + 1;
}