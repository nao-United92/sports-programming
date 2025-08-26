export const sortedUniq = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  const result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      result.push(array[i]);
    }
  }
  return result;
};

export const sortedUniqBy = (array, iteratee) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  const result = [];
  let last;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const computed = iteratee(value);
    if (i === 0 || computed !== last) {
      last = computed;
      result.push(value);
    }
  }
  return result;
};
