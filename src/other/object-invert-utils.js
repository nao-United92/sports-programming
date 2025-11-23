/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 */
export const invert = (object) => {
  if (object == null || typeof object !== 'object') {
    return {};
  }
  const result = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[object[key]] = key;
    }
  }
  return result;
};
