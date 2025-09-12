/**
 * Checks if `path` is a direct property of `object`.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
export const has = (object, path) => {
  if (object == null) {
    return false;
  }

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/[\[\]']+/g, '.').split('.').filter(Boolean);

  let current = object;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }
  return true;
};