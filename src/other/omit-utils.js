/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {object} Returns the new object.
 */
export function omit(obj, keys) {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}