export const flatMap = (arr, fn) => {
  return arr.reduce((acc, x) => acc.concat(fn(x)), []);
};
