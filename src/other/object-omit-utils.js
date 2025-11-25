/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};

module.exports = { omit };