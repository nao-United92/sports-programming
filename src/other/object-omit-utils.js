/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property paths to omit.
 * @returns {object} Returns the new object.
 */
const omit = (obj, keys) => {
  const newObj = { ...obj };
  keys.forEach(key => {
    delete newObj[key];
  });
  return newObj;
};

export { omit };
