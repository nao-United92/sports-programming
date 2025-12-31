// This function is similar to `findLastIndex` but is named to reflect "from end" explicitly.
// Iterates over elements of `array` from right to left, returning the index of the first element `predicate` returns truthy for.
export const findIndexFromEnd = (arr, predicate) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};