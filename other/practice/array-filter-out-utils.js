/**
 * Creates a new array with all elements for which `predicate` returns truthy *removed*.
 * Effectively keeps elements for which the predicate returns falsy.
 * The original array is not modified.
 *
 * @param {Array} arr The array to inspect.
 * @param {Function} predicate The function invoked per element to determine if it should be removed.
 * @returns {Array} Returns the new array of remaining elements.
 */
function arrayFilterOut(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!predicate(element, i, arr)) { // If predicate is falsy, keep the element
      newArray.push(element);
    }
  }
  return newArray;
}

module.exports = arrayFilterOut;
