/**
 * Creates an array of key-value pairs for an object.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 */
export function toPairs(object) {
  if (object == null) {
    return [];
  }
  return Object.entries(object);
}
