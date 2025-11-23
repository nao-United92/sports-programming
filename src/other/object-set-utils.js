const castPath = (path) => {
  if (Array.isArray(path)) {
    return path;
  }
  return path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
};

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for integer-keyed paths and objects for
 * all other parts.
 *
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 */
export const set = (object, path, value) => {
  if (object == null || typeof object !== 'object') {
    return object;
  }

  const pathParts = castPath(path);
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (i === pathParts.length - 1) {
      current[part] = value;
    } else {
      if (current[part] === undefined) {
        current[part] = /^\d+$/.test(pathParts[i + 1]) ? [] : {};
      }
      current = current[part];
    }
  }
  return object;
};
