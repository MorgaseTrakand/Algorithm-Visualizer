export const quickSort = async (low, high, array, setItems) => {
    if (low < high) {
        const pivotIndex = await partition(low, high, array, setItems);
        await quickSort(low, pivotIndex - 1, array, setItems);
        await quickSort(pivotIndex + 1, high, array, setItems);
    }
  };

  async function partition(low, high, arr, setItems) {
    let pivotValue = arr[high].value;
    let i = low - 1;
    let lastIndexes = []

    for (let j = low; j < high; j++) {
        if (arr[j].value <= pivotValue) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            setItems([...arr]);
            arr[i].backgroundColor = 'red';
            arr[j].backgroundColor = 'red';
            lastIndexes.forEach(item => item.backgroundColor = '#333A56');
            lastIndexes = [arr[i], arr[j]];
            // Introduce a delay to visualize the step
            await new Promise(resolve => setTimeout(resolve, 1));
        }
    }
    lastIndexes.forEach(item => item.backgroundColor = '#333A56');
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setItems([...arr]);
    return i + 1;
}