const castPath = (path) => {
  if (Array.isArray(path)) {
    return path;
  }
  return path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
};

/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`,
 * the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {*} Returns the resolved value.
 */
export const get = (object, path, defaultValue) => {
  if (object == null) {
    return defaultValue;
  }

  const pathParts = castPath(path);
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (current === null || typeof current !== 'object' || !Object.prototype.hasOwnProperty.call(current, part)) {
      return defaultValue;
    }
    current = current[part];
  }

  return current === undefined ? defaultValue : current;
};
