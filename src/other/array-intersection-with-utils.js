/**
 * Creates an array of unique values that are included in all given arrays using a custom comparator function.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} other The other array to inspect.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 */
export const intersectionWith = (array, other, comparator) => {
  if (!Array.isArray(array) || !Array.isArray(other) || typeof comparator !== 'function') {
    return [];
  }

  const result = [];
  for (const value of array) {
    // Ensure the value is not already in the result
    let inResult = false;
    for (const resValue of result) {
      if (comparator(value, resValue)) {
        inResult = true;
        break;
      }
    }
    if (inResult) {
      continue;
    }

    // Check if the value is in the other array
    for (const otherValue of other) {
      if (comparator(value, otherValue)) {
        result.push(value);
        break;
      }
    }
  }
  return result;
};
