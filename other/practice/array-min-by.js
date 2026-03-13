export const minBy = (arr, fn) =>
  arr.reduce((a, b) => (fn(a) <= fn(b) ? a : b));
