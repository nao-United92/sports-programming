/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @param {Object} obj The object to query.
 * @param {string|string[]} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
export const has = (obj, path) => {
  const pathArray = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (current === null || current === undefined || !(key in current)) {
      return false;
    }
    current = current[key];
  }

  return true;
};
