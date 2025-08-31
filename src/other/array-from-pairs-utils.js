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
