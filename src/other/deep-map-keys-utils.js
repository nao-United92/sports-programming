/**
 * Recursively maps the keys of an object.
 *
 * @param {Object} obj The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 */
export const deepMapKeys = (obj, iteratee) => {
  if (Array.isArray(obj)) {
    return obj.map(item => deepMapKeys(item, iteratee));
  }

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const result = {};
  Object.keys(obj).forEach(key => {
    const newKey = iteratee(obj[key], key, obj);
    result[newKey] = deepMapKeys(obj[key], iteratee);
  });
  return result;
};
