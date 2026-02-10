/**
 * Checks if all elements in an array satisfy a provided testing function.
 *
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function to execute on each element, returning a truthy or falsy value.
 * @returns {boolean} True if all elements pass the predicate test, false otherwise.
 */
function arrayEverySatisfies(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

export { arrayEverySatisfies };
