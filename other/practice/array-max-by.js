export const maxBy = (arr, fn) =>
  arr.reduce((a, b) => (fn(a) >= fn(b) ? a : b));
