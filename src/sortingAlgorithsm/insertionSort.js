export const insertionSort = async (arr, setItems, getDelay) => {
  let n = arr.length;
  
  // Loop through each element in the array
  for (let i = 1; i < n; i++) {
    let key = arr[i].height;
    let j = i - 1;

    // Move elements of the sorted portion that are greater than 'key'
    // to one position ahead to make space for 'key'
    while (j >= 0 && arr[j].height > key) {
      arr[j + 1].height = arr[j].height;
      j = j - 1;
    }

    // Insert the 'key' into its correct position
    arr[j + 1] = key;
    setItems([...arr])
    //arr[i].backgroundColor = 'green' // The element to be inserted into the sorted portion
  }
}