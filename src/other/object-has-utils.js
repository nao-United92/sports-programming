const castPath = (path) => {
  if (Array.isArray(path)) {
    return path;
  }
  return path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
};

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

  const pathParts = castPath(path);
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, part)) {
      return false;
    }
    current = current[part];
  }
  return true;
};
