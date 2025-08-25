
/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (object, keys) => {
  if (object === null || object === undefined) {
    return {};
  }
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};
