/**
 * Creates an object with inverted keys and values. If an object has multiple
 * keys with the same value, the last key will overwrite the previous ones.
 *
 * @param {object} object The object to invert.
 * @returns {object} Returns the new inverted object.
 */
export const invert = (object) => {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((result, key) => {
    result[object[key]] = key;
    return result;
  }, {});
};