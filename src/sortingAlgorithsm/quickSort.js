import { delaySystem } from "./delayFunction";

export const quickSort = async (low, high, array, setItems, getDelay) => {
    if (low < high) {
        const pivotIndex = await partition(low, high, array, setItems, getDelay);
        await quickSort(low, pivotIndex - 1, array, setItems, getDelay);
        await quickSort(pivotIndex + 1, high, array, setItems, getDelay);
    }
  };

  async function partition(low, high, arr, setItems, getDelay) {
    let pivotValue = arr[high].height;
    let i = low - 1;
    let lastIndexes = []

    for (let j = low; j < high; j++) {
        if (arr[j].height <= pivotValue) {
            await delaySystem(getDelay)

            i++;
            [arr[i].height, arr[j].height] = [arr[j].height, arr[i].height];
            setItems([...arr]);
            arr[i].backgroundColor = arr[j].backgroundColor = 'red';
            lastIndexes.forEach(item => item.backgroundColor = '#333A56');
            lastIndexes = [arr[i], arr[j]];
        }
    }
    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
    [arr[i + 1].height, arr[high].height] = [arr[high].height, arr[i + 1].height];
    setItems([...arr]);
    return i + 1;
}