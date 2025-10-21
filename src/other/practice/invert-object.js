/**
 * Creates an object with keys and values swapped.
 *
 * @param {object} object The object to invert.
 * @returns {object} Returns the new inverted object.
 */
export const invert = (object) => {
  if (object == null) {
    return {};
  }
  const result = {};
  Object.keys(object).forEach(key => {
    result[object[key]] = key;
  });
  return result;
};
