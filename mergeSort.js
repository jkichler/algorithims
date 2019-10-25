
function mergeSort(array) {
  // Write your code here.
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge2(mergeSort(left), mergeSort(right));
}

const merge2 = (arr1, arr2) => {
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;
    while (idx1 < arr1.length || idx2 < arr2.length) {
        if (arr1[idx1] <= arr2[idx2] || idx2 >= arr2.length) {
        newArr.push(arr1[idx1]);
        idx1++
        } else {
        if (idx2 < arr2.length) {
            newArr.push(arr2[idx2]);
            idx2++
        }
      }
    }
    return newArr;
};
