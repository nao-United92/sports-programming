/**
 * Creates an object composed of the picked object properties.
 * @param {object} obj The source object.
 * @param {string[]} keys The properties to pick.
 * @returns {object} Returns the new object.
 */
const pick = (obj, keys) => {
  if (obj == null) {
    return {};
  }
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {object} obj The source object.
 * @param {string[]} keys The properties to omit.
 * @returns {object} Returns the new object.
 */
const omit = (obj, keys) => {
  if (obj == null) {
    return {};
  }
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};

module.exports = { pick, omit };
