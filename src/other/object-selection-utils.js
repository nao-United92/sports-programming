/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, ...keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const flatKeys = keys.flat();
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => flatKeys.includes(key))
  );
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, ...keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const flatKeys = keys.flat();
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !flatKeys.includes(key))
  );
};

module.exports = {
  pick,
  omit,
};