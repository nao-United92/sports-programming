/**
 * Repeats each element of an array a specified number of times.
 *
 * @param {Array} array The input array.
 * @param {number} n The number of times to repeat each element. Must be a non-negative integer.
 * @returns {Array} A new array with each element repeated n times.
 */
function arrayRepeat(array, n) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new TypeError('Expected a non-negative integer for the second argument.');
  }

  const result = [];
  for (const item of array) {
    for (let i = 0; i < n; i++) {
      result.push(item);
    }
  }
  return result;
}

export { arrayRepeat };
