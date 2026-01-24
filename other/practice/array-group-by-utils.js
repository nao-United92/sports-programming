/**
 * Groups the elements of an array based on the return value of a callback function.
 * The grouping key can be a string, number, or symbol.
 *
 * @param {Array<T>} array The array to iterate over.
 * @param {function(T, number, Array<T>): K} callback The function to generate the grouping key.
 * @returns {Record<K, Array<T>>} An object where keys are the grouping keys and values are arrays of elements.
 * @template T
 * @template K
 */
function groupBy(array, callback) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  return array.reduce((acc, item, index, arr) => {
    const key = callback(item, index, arr);
    if (typeof key !== 'string' && typeof key !== 'number' && typeof key !== 'symbol') {
      // Coerce key to string if it's not one of the allowed types.
      // This is a common practice in JavaScript for object keys.
      return acc; // Skip if key cannot be coerced or is undefined/null
    }
    const safeKey = String(key); // Ensure key is a string for object property access
    (acc[safeKey] = acc[safeKey] || []).push(item);
    return acc;
  }, {});
}

export default groupBy;