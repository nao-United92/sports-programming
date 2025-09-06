
export const findIndex = (array, predicate) => {
  if (!Array.isArray(array)) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
};
