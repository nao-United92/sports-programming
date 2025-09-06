
export const findLast = (array, predicate) => {
  if (!Array.isArray(array)) {
    return undefined;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};
