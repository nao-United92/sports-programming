// Creates a slice of `array` with elements taken from the beginning. Elements are taken until `predicate` returns falsey.
export const takeWhile = (arr, predicate) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      result.push(arr[i]);
    } else {
      break;
    }
  }
  return result;
};