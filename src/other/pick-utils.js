/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
export const pick = (obj, keys) => {
  const newObj = {};
  const keySet = new Set(keys);

  for (const key of keySet) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
