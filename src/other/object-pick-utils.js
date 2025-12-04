/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} The new object.
 */
export const pick = (obj, keys) => {
  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
