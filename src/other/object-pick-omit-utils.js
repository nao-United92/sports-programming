/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
export const omit = (obj, keys) => {
  if (obj === null || obj === undefined) {
    return {};
  }
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};