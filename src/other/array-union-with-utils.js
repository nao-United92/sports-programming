/**
 * Creates an array of unique values, in order, from all given arrays using a custom comparator function.
 *
 * @param {Array} array The first array.
 * @param {Array} other The second array.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {Array} Returns the new array of unique values.
 */
export const unionWith = (array, other, comparator) => {
  if (!Array.isArray(array) || !Array.isArray(other) || typeof comparator !== 'function') {
    return Array.isArray(array) ? [...array] : (Array.isArray(other) ? [...other] : []);
  }

  const combined = [...array, ...other];
  const result = [];

  for (const value of combined) {
    let found = false;
    for (const resValue of result) {
      if (comparator(value, resValue)) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(value);
    }
  }

  return result;
};
