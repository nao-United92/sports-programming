const { isEqual } = require('./object-is-equal-utils');

/**
 * Performs a shallow comparison between `object` and `source` to determine if
 * `object` contains equivalent property values.
 *
 * @param {object} object The object to inspect.
 * @param {object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function isMatch(object, source) {
  if (object === source) {
    return true;
  }

  if (object == null || source == null || typeof object !== 'object' || typeof source !== 'object') {
    return false;
  }

  const keys = Object.keys(source);
  if (keys.length === 0) {
    return true; // An empty source matches any non-null object
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!Object.prototype.hasOwnProperty.call(object, key) || !isEqual(object[key], source[key])) {
      return false;
    }
  }

  return true;
}

module.exports = { isMatch };
