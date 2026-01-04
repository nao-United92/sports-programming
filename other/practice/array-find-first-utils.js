export const findFirst = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a predicate function');
  }

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};
