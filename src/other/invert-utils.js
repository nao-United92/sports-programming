/**
 * Creates an object with inverted keys and values. If the given object has duplicate values, the subsequent values will overwrite previous values of the same value.
 *
 * @param {Object} obj The object to invert.
 * @returns {Object} Returns the new inverted object.
 */
const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};

module.exports = { invert };