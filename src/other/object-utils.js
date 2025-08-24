/**
 * Creates an object composed of the picked object properties.
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
export function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
export function omit(obj, keys) {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
