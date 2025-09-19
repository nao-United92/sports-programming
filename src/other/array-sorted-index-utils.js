/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted into `array`.
 */
const sortedIndex = (array, value) => {
  let low = 0;
  let high = array == null ? 0 : array.length;

  while (low < high) {
    const mid = (low + high) >>> 1; // Unsigned right shift for integer division
    const computed = array[mid];

    if (computed < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
};

/**
 * This function is like `sortedIndex` except that it returns the highest
 * index at which `value` should be inserted into `array` in order to
 * maintain its sort order.
 *
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted into `array`.
 */
const sortedLastIndex = (array, value) => {
  let low = 0;
  let high = array == null ? 0 : array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    const computed = array[mid];

    if (computed <= value) { // Key difference: <= instead of <
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
};

/**
 * This function is like `sortedIndex` except that it accepts `iteratee`
 * which is invoked per iteration to compute the sort ranking of `value`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted into `array`.
 */
const sortedIndexBy = (array, value, iteratee) => {
  let low = 0;
  let high = array == null ? 0 : array.length;
  const computedValue = iteratee(value);

  while (low < high) {
    const mid = (low + high) >>> 1;
    const computed = iteratee(array[mid]);

    if (computed < computedValue) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
};

export { sortedIndex, sortedLastIndex, sortedIndexBy };
