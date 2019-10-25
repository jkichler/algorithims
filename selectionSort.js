function selectionSort(array) {
  // Write your code here.
  const swap = (array, idx1, idx2) => {
    let tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
  }
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) lowest = j;
    }
    if (lowest !== i) swap(array, i, lowest)
  }
  return array;
}
