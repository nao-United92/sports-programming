/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
const isEqual = (value, other) => {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || typeof value !== 'object' || typeof other !== 'object') {
    return false;
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) {
    return false;
  }

  const keysValue = Object.keys(value);
  const keysOther = Object.keys(other);

  if (keysValue.length !== keysOther.length) {
    return false;
  }

  for (const key of keysValue) {
    if (!keysOther.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
};

module.exports = { isEqual };
