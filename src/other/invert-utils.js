/**
 * Creates an object composed of inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite property assignments of previous values.
 *
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 */
export const invert = (object) => {
  if (!object) {
    return {};
  }
  return Object.entries(object).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
};
