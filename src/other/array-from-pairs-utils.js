
/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 */
export function fromPairs(pairs) {
  const result = {};
  if (pairs == null) {
    return result;
  }
  for (const pair of pairs) {
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * Creates an object from two arrays, one of keys and one of values.
 *
 * @param {Array} keys The array of keys.
 * @param {Array} values The array of values.
 * @returns {Object} Returns the new object.
 */
export function zipObject(keys, values) {
  const result = {};
  if (keys == null) {
    return result;
  }
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values ? values[i] : undefined;
  }
  return result;
}

