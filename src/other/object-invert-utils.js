/**
 * Creates an object with the inverted keys and values of an object.
 *
 * @param {Object} obj The object to invert.
 * @returns {Object} The inverted object.
 */
export function invert(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
}