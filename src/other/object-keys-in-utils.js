/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
export const keysIn = (object) => {
  if (object == null) {
    return [];
  }
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
};
