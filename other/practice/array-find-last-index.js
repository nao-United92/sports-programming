export const findLastIndex = (arr, fn) => {
  const index = arr
    .map((val, i) => [val, i])
    .filter(([val, i]) => fn(val, i, arr))
    .pop();
  return index ? index[1] : -1;
};
