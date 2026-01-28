/**
 * Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned.
 *
 * @param {object} object The object to query.
 * @param {string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns {*} Returns the resolved value.
 */
function getProperty(object, path, defaultValue) {
  if (object === null || typeof object === 'undefined') {
    return defaultValue;
  }

  const pathParts = path.split('.');
  let current = object;

  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    if (typeof current !== 'object' || current === null || !(part in current)) {
      return defaultValue;
    }
    current = current[part];
  }

  return typeof current === 'undefined' ? defaultValue : current;
}

module.exports = {
  getProperty,
};
