/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, keys) => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};

export { omit };