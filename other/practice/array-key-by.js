/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` through `iteratee`. The corresponding value
 * of each key is the last element responsible for generating the key.
 *
 * @param {Array} arr The array to iterate over.
 * @param {Function|string} iteratee The function invoked per iteration or property name.
 * @returns {Object} Returns the composed aggregate object.
 */
function keyBy(arr, iteratee) {
  if (!Array.isArray(arr)) {
    return {};
  }

  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let key;
    if (typeof iteratee === 'function') {
      key = iteratee(item);
    } else if (typeof iteratee === 'string') {
      key = item[iteratee];
    } else {
      key = item; // Default to keying by the item itself if no iteratee is provided
    }
    result[key] = item;
  }
  return result;
}

export { keyBy };
