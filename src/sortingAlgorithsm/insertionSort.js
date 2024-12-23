import { delaySystem } from "./delayFunction";

export const insertionSort = async (arr, setItems, getDelay) => {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].height > key.height) {
      arr[j].backgroundColor = 'red'
      setItems([...arr])
      await delaySystem(getDelay)
      arr[j].backgroundColor = ''
      arr[j + 1] = arr[j]; // Move the whole object
      j = j - 1;
    }

    // Insert the 'key' into its correct position
    arr[j + 1] = key; // Insert the entire object
    setItems([...arr]); // Update the state
  }
}
