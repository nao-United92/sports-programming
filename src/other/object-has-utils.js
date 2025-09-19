// This is a simplified version. A robust implementation would handle brackets and quotes.
const stringToPath = (string) => {
  return string.replace(/\[(.*?)\]/g, '.$1').split('.');
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @param {object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
const has = (object, path) => {
  const pathArray = Array.isArray(path) ? path : stringToPath(path);
  if (!pathArray.length) {
    return false;
  }

  let current = object;
  // Traverse up to the second-to-last key
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    if (current == null || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }

  // Check the final key on the final object
  const lastKey = pathArray[pathArray.length - 1];
  return current != null && Object.prototype.hasOwnProperty.call(current, lastKey);
};

export { has };
