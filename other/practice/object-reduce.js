// other/practice/object-reduce.js
/**
 * Reduces an object to a single value using a callback function.
 * The callback function is invoked with four arguments: (accumulator, value, key, object).
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} callback The function to reduce the object.
 * @param {any} initialValue The initial value of the accumulator.
 * @returns {any} The accumulated value.
 * @example
 *
 * objectReduce({ a: 1, b: 2, c: 3 }, (acc, value) => acc + value, 0);
 * // => 6
 *
 * objectReduce({ a: 1, b: 2 }, (acc, value, key) => ({ ...acc, [key + '_mapped']: value * 2 }), {});
 * // => { a_mapped: 2, b_mapped: 4 }
 */
function objectReduce(obj, callback, initialValue) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return initialValue;
  }
  if (typeof callback !== 'function') {
    return initialValue;
  }

  let accumulator = initialValue;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      accumulator = callback(accumulator, obj[key], key, obj);
    }
  }
  return accumulator;
}

module.exports = objectReduce;
