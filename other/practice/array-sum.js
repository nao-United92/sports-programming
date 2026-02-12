/**
 * Computes the sum of the values in `array`.
 *
 * @param {Array} arr The array to iterate over.
 * @returns {number} Returns the sum.
 */
function sum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((acc, num) => acc + Number(num), 0);
}

export { sum };
