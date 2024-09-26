import { delaySystem } from "./delayFunction";

export const selectionSort = async (arr, setItems, getDelay) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the first unsorted element is the minimum
    let minIndex = i;

    // Loop through the rest of the array to find the true minimum
    for (let j = i + 1; j < n; j++) {
      arr[j].backgroundColor = 'red';
      setItems([...arr])
      await delaySystem(getDelay)
      if (arr[j].height < arr[minIndex].height) {
        minIndex = j;
      }
      arr[j].backgroundColor = '';
      setItems([...arr])
    }

    // If a smaller element was found, swap it with the current element
    if (minIndex !== i) {
      [arr[i].height, arr[minIndex].height] = [arr[minIndex].height, arr[i].height]; // Swap using destructuring
    }
    setItems([...arr])
  }
}
