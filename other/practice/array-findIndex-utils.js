export const findIndex = (arr, predicate, fromIndex = 0) => {
  if (!arr || arr.length === 0) {
    return -1;
  }

  for (let i = Math.max(fromIndex, 0); i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
