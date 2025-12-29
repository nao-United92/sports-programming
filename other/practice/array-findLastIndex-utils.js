export const findLastIndex = (arr, predicate, fromIndex) => {
  if (!arr || arr.length === 0) {
    return -1;
  }

  const start = typeof fromIndex === 'number' ? Math.min(fromIndex, arr.length - 1) : arr.length - 1;

  for (let i = start; i >= 0; i--) {
    if (predicate(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
