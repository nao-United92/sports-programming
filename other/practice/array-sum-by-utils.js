export const sumBy = (arr, fn) =>
  arr.reduce(
    (acc, val) => acc + (typeof fn === 'function' ? fn(val) : val[fn]),
    0
  );