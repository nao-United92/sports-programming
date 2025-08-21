/**
 * Creates an object with inverted keys and values. If `object` contains
 * duplicate values, subsequent values overwrite property assignments of
 * prior values.
 *
 * @param {Object} obj The object to invert.
 * @returns {Object} Returns the new inverted object.
 */
export const invert = (obj) => {
  const result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key]] = key;
    }
  }
  return result;
};
