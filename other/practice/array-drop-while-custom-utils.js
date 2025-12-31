// Creates a slice of `array` excluding elements dropped from the beginning. Elements are dropped until `predicate` returns falsey.
export const dropWhileCustom = (arr, predicate) => {
  let i = 0;
  while (i < arr.length && predicate(arr[i], i, arr)) {
    i++;
  }
  return arr.slice(i);
};