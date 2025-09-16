/**
 * Creates an object with keys and values inverted.
 * @param {Object} obj The source object.
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