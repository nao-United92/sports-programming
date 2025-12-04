/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to omit.
 * @returns {object} The new object.
 */
export const omit = (obj, keys) => {
  const newObj = {};
  const keySet = new Set(keys);
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keySet.has(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
