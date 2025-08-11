/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
export const pick = (obj, keys) => {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};
