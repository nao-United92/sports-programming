// Iterates over elements of `array` from right to left, returning the first element `predicate` returns truthy for.
export const findLastSatisfying = (arr, predicate) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};